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
  // Check if post has medium_image array and it's not empty
  if (post.medium_image && post.medium_image.length > 0) {
    return post.medium_image[0].url;
  }

  // Check if post has small_image array and it's not empty
  if (post.small_image && post.small_image.length > 0) {
    return post.small_image[0].url;
  }

  // Fallback to random image
  return `https://picsum.photos/400/300?random=${post.id}`;
};

export const getFallbackImage = (postId: number): string => {
  return `https://picsum.photos/400/300?random=${postId}`;
};
