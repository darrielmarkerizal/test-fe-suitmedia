import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const imageUrl = searchParams.get("url");

  if (!imageUrl) {
    return NextResponse.json(
      { error: "URL parameter is required" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(imageUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        Accept: "image/*,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Accept-Encoding": "gzip, deflate, br",
        DNT: "1",
        Connection: "keep-alive",
        "Upgrade-Insecure-Requests": "1",
      },
    });

    if (!response.ok) {
      console.error(
        `Failed to fetch image: ${response.status} ${response.statusText}`
      );

      // Jika gagal, kembalikan placeholder image
      const placeholderResponse = await fetch(
        "https://via.placeholder.com/400x300/e5e7eb/6b7280?text=Image+Not+Found"
      );
      if (placeholderResponse.ok) {
        const buffer = await placeholderResponse.arrayBuffer();
        return new NextResponse(buffer, {
          headers: {
            "Content-Type": "image/png",
            "Cache-Control": "public, max-age=3600",
          },
        });
      }

      throw new Error(`Failed to fetch image: ${response.status}`);
    }

    const buffer = await response.arrayBuffer();
    const contentType = response.headers.get("content-type") || "image/jpeg";

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    console.error("Image proxy error:", error);

    // Return placeholder image on error
    try {
      const placeholderResponse = await fetch(
        "https://via.placeholder.com/400x300/e5e7eb/6b7280?text=Image+Error"
      );
      if (placeholderResponse.ok) {
        const buffer = await placeholderResponse.arrayBuffer();
        return new NextResponse(buffer, {
          headers: {
            "Content-Type": "image/png",
            "Cache-Control": "public, max-age=3600",
          },
        });
      }
    } catch (placeholderError) {
      console.error("Placeholder fetch error:", placeholderError);
    }

    return NextResponse.json(
      { error: "Failed to fetch image" },
      { status: 500 }
    );
  }
}
