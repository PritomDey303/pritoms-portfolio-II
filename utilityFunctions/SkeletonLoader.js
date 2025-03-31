const SkeletonLoader = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {Array (6).fill (0).map ((_, index) => (
        <div key={index} className="bg-gray-200 animate-pulse rounded-lg p-6">
          <div className="bg-gray-300 h-40 w-full rounded mb-4" />
          <div className="bg-gray-300 h-6 w-3/4 mb-2" />
          <div className="bg-gray-300 h-4 w-1/2" />
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
