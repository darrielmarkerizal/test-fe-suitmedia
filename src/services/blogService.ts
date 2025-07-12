import axios from "axios";
import { ApiResponse, BlogGridFilters } from "../types/blog";

const API_BASE_URL = "https://suitmedia-backend.suitdev.com/api/ideas";

export const fetchBlogPosts = async (
  filters: BlogGridFilters
): Promise<ApiResponse> => {
  const sort = filters.sort === "newest" ? "-published_at" : "published_at";

  const response = await axios.get(API_BASE_URL, {
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
