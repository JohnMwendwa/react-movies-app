function MovieDetailsSkeleton() {
  return (
    <div className="flex flex-col">
      {/* SMALL SCREEN DEVICES */}
      <div className="sm:hidden">
        {/* title */}
        <div className="h-6 bg-orange-500 animate-pulse w-3/4 rounded-full" />
        {/* year */}
        <div className="h-4 bg-gray-500 animate-pulse w-20 mt-2 rounded-full" />
        {/* genre */}
        <div className="h-4 bg-gray-500 animate-pulse w-32 mt-2 rounded-full" />
        <div className="flex gap-2 mt-4">
          {/* Movie cover image */}
          <div className=" w-[210px] h-[315px] animate-pulse bg-gray-400 rounded-lg" />

          {/* Available in*/}
          <div className="flex flex-col ml-4">
            <div className="h-4 bg-orange-500 animate-pulse w-32 rounded-full" />
            <div className="bg-gray-500 animate-pulse h-8 w-24 mt-4 rounded-sm" />
            <div className="bg-gray-500 animate-pulse h-8 w-24 mt-4 rounded-sm" />
          </div>
        </div>
      </div>

      {/* MEDIUM & SCREEN DEVICES */}
      <div className="hidden sm:flex gap-8">
        {/* Movie cover image */}
        <div className=" w-[240px] h-[360px] animate-pulse bg-gray-400 rounded-lg" />

        <div className="flex flex-col gap-2">
          {/* title */}
          <div className="h-8 bg-orange-500 animate-pulse w-3/4 rounded-full" />
          {/* year */}
          <div className="h-4 bg-gray-500 animate-pulse w-20 mt-2 rounded-full" />
          {/* genre */}
          <div className="h-4 bg-gray-500 animate-pulse w-32 mt-2 rounded-full" />

          {/* Available in*/}
          <div className="flex items-center gap-2 mt-4">
            <div className="h-4 bg-orange-500 animate-pulse w-32 rounded-full mr-4" />
            <div className="bg-gray-500 animate-pulse h-8 w-32 rounded-lg" />
            <div className="bg-gray-500 animate-pulse h-8 w-32 rounded-lg" />
          </div>

          {/* Download Button */}
          <div className="bg-green-500 animate-pulse w-32 h-10 mt-2 rounded-lg" />
        </div>
      </div>

      {/* YOUTUBE SKELETON */}
      <div className="hidden sm:block bg-gray-600 animate-pulse w-[516px] h-[315px] mt-4 rounded-lg" />

      {/* PLOT SUMMARY */}
      <div className="h-5 bg-orange-500 animate-pulse w-40 mt-4 rounded-full" />
      <div className="h-3 bg-gray-300 animate-pulse w-11/12 mt-2 rounded-full max-w-5xl" />
      <div className="h-3 bg-gray-300 animate-pulse w-11/12 mt-2 rounded-full max-w-5xl" />
      <div className="h-3 bg-gray-300 animate-pulse w-11/12 mt-2 rounded-full max-w-5xl" />
      <div className="h-3 bg-gray-300 animate-pulse w-1/2 mt-2 rounded-full max-w-5xl" />

      {/* Back BUTTON */}
      <div className="h-10 bg-black/70 animate-pulse w-20 mt-6 rounded-md mx-auto" />
    </div>
  );
}

export default MovieDetailsSkeleton;
