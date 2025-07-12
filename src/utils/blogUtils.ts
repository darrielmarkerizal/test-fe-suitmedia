import { BlogPost } from "../types/blog";

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export const stripHtml = (html: string): string => {
  if (typeof window === "undefined") {
    // Server-side fallback
    return html.replace(/<[^>]*>/g, "");
  }
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
};

// Fungsi untuk mengekstrak gambar pertama dari konten HTML
export const extractFirstImageFromHtml = (
  htmlContent: string
): string | null => {
  if (typeof window === "undefined") {
    // Server-side: gunakan regex untuk mengekstrak src dari tag img
    const imgRegex = /<img[^>]+src="([^"]+)"/i;
    const match = htmlContent.match(imgRegex);
    return match ? match[1] : null;
  }

  // Client-side: gunakan DOM parser
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, "text/html");
  const firstImg = doc.querySelector("img");
  return firstImg ? firstImg.src : null;
};

export const getImageUrl = (post: BlogPost): string => {
  // Prioritas 1: Coba gunakan small_image dari API
  if (post.small_image && post.small_image.length > 0) {
    const imageUrl = post.small_image[0].url;
    // Gunakan image proxy untuk mengatasi CORS
    return `/api/image-proxy?url=${encodeURIComponent(imageUrl)}`;
  }

  // Prioritas 2: Coba gunakan medium_image dari API
  if (post.medium_image && post.medium_image.length > 0) {
    const imageUrl = post.medium_image[0].url;
    // Gunakan image proxy untuk mengatasi CORS
    return `/api/image-proxy?url=${encodeURIComponent(imageUrl)}`;
  }

  // Prioritas 3: Coba ekstrak gambar dari konten HTML
  const contentImage = extractFirstImageFromHtml(post.content);
  if (contentImage) {
    // Jika gambar dari konten HTML adalah URL eksternal, gunakan image proxy
    if (contentImage.startsWith("http")) {
      return `/api/image-proxy?url=${encodeURIComponent(contentImage)}`;
    }
    return contentImage;
  }

  // Fallback: Gunakan placeholder yang konsisten
  return `https://via.placeholder.com/400x300/e5e7eb/6b7280?text=No+Image`;
};

export const getFallbackImage = (postId: number): string => {
  return `https://picsum.photos/400/300?random=${postId}`;
};
