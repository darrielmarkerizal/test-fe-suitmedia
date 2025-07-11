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

export const getImageUrl = (post: BlogPost): string => {
  let imageUrl: string | null = null;

  // Prioritas: small_image untuk ukuran yang lebih kecil dan loading yang lebih cepat
  if (post.small_image && post.small_image.length > 0) {
    imageUrl = post.small_image[0].url;
  }
  // Fallback ke medium_image jika small_image tidak tersedia
  else if (post.medium_image && post.medium_image.length > 0) {
    imageUrl = post.medium_image[0].url;
  }

  // Jika ada URL gambar dari API, gunakan image proxy
  if (imageUrl) {
    return `/api/image-proxy?url=${encodeURIComponent(imageUrl)}`;
  }

  // Fallback ke picsum jika tidak ada gambar dari API
  return `https://picsum.photos/400/300?random=${post.id}`;
};

export const getFallbackImage = (postId: number): string => {
  return `https://picsum.photos/400/300?random=${postId}`;
};
