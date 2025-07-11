"use client";

import { useState, useEffect } from "react";
import { ApiResponse, BlogPost } from "../types/blog";
import { fetchBlogPosts } from "../services/blogService";
import { useBlogFilters } from "../hooks/useBlogFilters";
import BlogCard from "./blog/BlogCard";
import BlogControls from "./blog/BlogControls";
import BlogPagination from "./blog/BlogPagination";
import BlogLoading from "./blog/BlogLoading";
import BlogError from "./blog/BlogError";

const BlogGrid = () => {
  const { filters, handleSortChange, handlePerPageChange, handlePageChange } =
    useBlogFilters();

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetchBlogPosts(filters);

        console.log("API Response:", response);

        setPosts(response.data);
        setApiResponse(response);
      } catch (err) {
        setError("Failed to fetch data. Please try again.");
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filters]);

  if (loading) {
    return <BlogLoading />;
  }

  if (error) {
    return (
      <BlogError message={error} onRetry={() => window.location.reload()} />
    );
  }

  const startItem = apiResponse?.meta.from || 0;
  const endItem = apiResponse?.meta.to || 0;
  const totalItems = apiResponse?.meta.total || 0;
  const totalPages = apiResponse?.meta.last_page || 1;

  return (
    <div className="bg-white py-16 relative z-10">
      <div className="container mx-auto px-6">
        <BlogControls
          startItem={startItem}
          endItem={endItem}
          totalItems={totalItems}
          itemsPerPage={filters.perPage}
          sortOrder={filters.sort}
          onSortChange={handleSortChange}
          onPerPageChange={handlePerPageChange}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <BlogPagination
          currentPage={filters.page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default BlogGrid;
