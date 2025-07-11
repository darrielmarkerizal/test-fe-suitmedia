interface BlogErrorProps {
  message: string;
  onRetry?: () => void;
}

const BlogError = ({ message, onRetry }: BlogErrorProps) => {
  return (
    <div className="bg-white py-16 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-red-600 text-lg">{message}</p>
          {onRetry && (
            <button
              onClick={onRetry}
              className="mt-4 px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
            >
              Try Again
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogError;
