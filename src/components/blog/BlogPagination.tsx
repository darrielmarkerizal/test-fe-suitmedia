interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const BlogPagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: BlogPaginationProps) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-2 text-gray-500 hover:text-orange-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        ‹‹
      </button>

      {currentPage > 3 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className="px-3 py-2 text-gray-700 hover:text-orange-500"
          >
            1
          </button>
          {currentPage > 4 && <span className="px-2 text-gray-400">...</span>}
        </>
      )}

      {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
        const pageNum =
          Math.max(1, Math.min(totalPages - 4, currentPage - 2)) + i;
        if (pageNum > totalPages) return null;

        return (
          <button
            key={pageNum}
            onClick={() => onPageChange(pageNum)}
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

      {currentPage < totalPages - 2 && (
        <>
          {currentPage < totalPages - 3 && (
            <span className="px-2 text-gray-400">...</span>
          )}
          <button
            onClick={() => onPageChange(totalPages)}
            className="px-3 py-2 text-gray-700 hover:text-orange-500"
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-2 text-gray-500 hover:text-orange-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        ››
      </button>
    </div>
  );
};

export default BlogPagination;
