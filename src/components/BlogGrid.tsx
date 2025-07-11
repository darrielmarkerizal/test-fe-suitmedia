"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  excerpt: string;
}

// Mock data - replace with your actual data source
const generateMockPosts = (): BlogPost[] => {
  const titles = [
    "Kenali Tingkatan Influencers berdasarkan Jumlah Followers",
    "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer Marketing yang Tepat",
    "Tips Memilih Platform Social Media yang Tepat untuk Bisnis Anda",
    "Cara Mengoptimalkan Content Marketing untuk ROI yang Maksimal",
    "Strategi Digital Marketing yang Efektif di Era Modern",
    "Panduan Lengkap Membangun Brand Awareness melalui Social Media",
    "Mengukur Kesuksesan Campaign Digital Marketing Anda",
    "Tren Influencer Marketing yang Perlu Anda Ketahui di 2024",
  ];

  return Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    title:
      titles[i % titles.length] +
      (i > 7 ? ` - Part ${Math.floor(i / 8) + 1}` : ""),
    date: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0],
    image: `https://picsum.photos/400/250?random=${i + 1}`,
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  }));
};

const BlogGrid = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get URL parameters
  const currentPage = parseInt(searchParams.get("page") || "1");
  const itemsPerPage = parseInt(searchParams.get("per_page") || "10");
  const sortOrder = searchParams.get("sort") || "newest";

  const [posts] = useState<BlogPost[]>(generateMockPosts());
  const [currentPosts, setCurrentPosts] = useState<BlogPost[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  // Update URL without page reload
  const updateURL = (params: Record<string, string>) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    Object.entries(params).forEach(([key, value]) => {
      current.set(key, value);
    });

    const search = current.toString();
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`, { scroll: false });
  };

  // Sort and paginate posts
  useEffect(() => {
    let sortedPosts = [...posts];

    // Sort posts
    if (sortOrder === "newest") {
      sortedPosts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    } else {
      sortedPosts.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    }

    // Calculate pagination
    const totalPages = Math.ceil(sortedPosts.length / itemsPerPage);
    setTotalPages(totalPages);

    // Get current page posts
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedPosts = sortedPosts.slice(startIndex, endIndex);

    setCurrentPosts(paginatedPosts);
  }, [posts, currentPage, itemsPerPage, sortOrder]);

  const handleSortChange = (newSort: string) => {
    updateURL({ sort: newSort, page: "1" });
  };

  const handlePerPageChange = (newPerPage: string) => {
    updateURL({ per_page: newPerPage, page: "1" });
  };

  const handlePageChange = (newPage: number) => {
    updateURL({ page: newPage.toString() });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, posts.length);

  return (
    <div className="bg-white py-16 relative z-10">
      <div className="container mx-auto px-6">
        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          {/* Results info */}
          <div className="text-gray-600">
            Showing {startItem} - {endItem} of {posts.length}
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            {/* Items per page */}
            <div className="flex items-center gap-2">
              <label
                htmlFor="per-page"
                className="text-gray-600 text-sm whitespace-nowrap"
              >
                Show per page:
              </label>
              <select
                id="per-page"
                value={itemsPerPage}
                onChange={(e) => handlePerPageChange(e.target.value)}
                className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
              </select>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <label
                htmlFor="sort"
                className="text-gray-600 text-sm whitespace-nowrap"
              >
                Sort by:
              </label>
              <select
                id="sort"
                value={sortOrder}
                onChange={(e) => handleSortChange(e.target.value)}
                className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </select>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {currentPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* Image with consistent ratio */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-200">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Date */}
                <time className="text-xs text-gray-500 uppercase tracking-wide">
                  {formatDate(post.date)}
                </time>

                {/* Title with 3-line limit */}
                <h3 className="text-gray-800 font-semibold mt-2 mb-3 leading-tight">
                  <span className="line-clamp-3 text-sm">{post.title}</span>
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-xs line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            {/* Previous */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-2 text-gray-500 hover:text-orange-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ‹‹
            </button>

            {/* First page */}
            {currentPage > 3 && (
              <>
                <button
                  onClick={() => handlePageChange(1)}
                  className="px-3 py-2 text-gray-700 hover:text-orange-500"
                >
                  1
                </button>
                {currentPage > 4 && (
                  <span className="px-2 text-gray-400">...</span>
                )}
              </>
            )}

            {/* Page numbers around current */}
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              const pageNum =
                Math.max(1, Math.min(totalPages - 4, currentPage - 2)) + i;
              if (pageNum > totalPages) return null;

              return (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`px-3 py-2 rounded ${
                    pageNum === currentPage
                      ? "bg-orange-500 text-white"
                      : "text-gray-700 hover:text-orange-500"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            {/* Last page */}
            {currentPage < totalPages - 2 && (
              <>
                {currentPage < totalPages - 3 && (
                  <span className="px-2 text-gray-400">...</span>
                )}
                <button
                  onClick={() => handlePageChange(totalPages)}
                  className="px-3 py-2 text-gray-700 hover:text-orange-500"
                >
                  {totalPages}
                </button>
              </>
            )}

            {/* Next */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-2 text-gray-500 hover:text-orange-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ››
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogGrid;
