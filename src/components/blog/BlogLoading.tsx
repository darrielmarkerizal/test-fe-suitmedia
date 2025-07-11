const BlogLoading = () => {
  return (
    <div className="bg-white py-16 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogLoading;
