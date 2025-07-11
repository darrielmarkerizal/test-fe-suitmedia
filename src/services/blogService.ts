import axios from "axios";
import { ApiResponse, BlogGridFilters } from "../types/blog";

export const fetchBlogPosts = async (
  filters: BlogGridFilters
): Promise<ApiResponse> => {
  const sort = filters.sort === "newest" ? "-published_at" : "published_at";

  const response = await axios.get("/api/proxy/ideas", {
    params: {
      "page[number]": filters.page,
      "page[size]": filters.perPage,
      "append[]": ["small_image", "medium_image"],
      sort: sort,
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  return response.data;
};
