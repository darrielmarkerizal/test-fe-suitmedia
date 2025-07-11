import { useState, useCallback } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { BlogGridFilters } from "../types/blog";

export const useBlogFilters = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get current filters from URL
  const getCurrentFilters = useCallback(
    (): BlogGridFilters => ({
      page: parseInt(searchParams?.get("page") || "1"),
      perPage: parseInt(searchParams?.get("per_page") || "10"),
      sort: (searchParams?.get("sort") as "newest" | "oldest") || "newest",
    }),
    [searchParams]
  );

  const [filters, setFilters] = useState<BlogGridFilters>(getCurrentFilters());

  // Update URL without page reload
  const updateURL = useCallback(
    (newParams: Partial<BlogGridFilters>) => {
      if (!pathname || !searchParams) return; // Add null checks

      const current = new URLSearchParams(Array.from(searchParams.entries()));

      if (newParams.page !== undefined) {
        current.set("page", newParams.page.toString());
      }
      if (newParams.perPage !== undefined) {
        current.set("per_page", newParams.perPage.toString());
      }
      if (newParams.sort !== undefined) {
        current.set("sort", newParams.sort);
      }

      const search = current.toString();
      const query = search ? `?${search}` : "";

      router.push(`${pathname}${query}`, { scroll: false });
    },
    [router, pathname, searchParams]
  );

  const updateFilters = useCallback(
    (newFilters: Partial<BlogGridFilters>) => {
      const updatedFilters = { ...filters, ...newFilters };
      setFilters(updatedFilters);
      updateURL(newFilters);
    },
    [filters, updateURL]
  );

  const handleSortChange = useCallback(
    (sort: "newest" | "oldest") => {
      updateFilters({ sort, page: 1 });
    },
    [updateFilters]
  );

  const handlePerPageChange = useCallback(
    (perPage: number) => {
      updateFilters({ perPage, page: 1 });
    },
    [updateFilters]
  );

  const handlePageChange = useCallback(
    (page: number) => {
      updateFilters({ page });
    },
    [updateFilters]
  );

  return {
    filters,
    handleSortChange,
    handlePerPageChange,
    handlePageChange,
  };
};
