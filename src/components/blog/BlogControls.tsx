interface BlogControlsProps {
  startItem: number;
  endItem: number;
  totalItems: number;
  itemsPerPage: number;
  sortOrder: string;
  onSortChange: (sort: "newest" | "oldest") => void;
  onPerPageChange: (perPage: number) => void;
}

const BlogControls = ({
  startItem,
  endItem,
  totalItems,
  itemsPerPage,
  sortOrder,
  onSortChange,
  onPerPageChange,
}: BlogControlsProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
      <div className="text-gray-600">
        Showing {startItem} - {endItem} of {totalItems}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
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
            onChange={(e) => onPerPageChange(parseInt(e.target.value))}
            className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>

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
            onChange={(e) =>
              onSortChange(e.target.value as "newest" | "oldest")
            }
            className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default BlogControls;
