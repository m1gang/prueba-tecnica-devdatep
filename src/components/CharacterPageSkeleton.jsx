import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const CharacterPageSkeleton = () => {
  return (
    <div className="grid lg:grid-cols-2">
      {/* Left side: Image Skeleton */}
      <div className="flex justify-center items-center h-screen bg-gray-200 dark:bg-gray-900 overflow-hidden">
        <Skeleton
          height="100%"
          width="100%"
          containerClassName="w-full h-full"
        />
      </div>

      {/* Right side: Content Skeleton */}
      <div className="flex flex-col justify-center bg-background-light dark:bg-background-dark">
        {/* Header Section */}
        <section className="flex gap-5 m-5">
          <div className="bg-gray-300 dark:bg-gray-800 w-1 h-full rounded-md" />
          <div className="flex-1">
            <Skeleton width={150} height={24} className="mb-2" />
            <Skeleton width="80%" height={80} className="mb-4" />
            <div className="flex items-center gap-2">
              <Skeleton circle width={24} height={24} />
              <Skeleton width={120} height={20} />
            </div>
          </div>
        </section>

        {/* Info Boxes Section */}
        <section className="flex gap-5 m-5">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-40 flex flex-col px-4 py-4 bg-stone-800/50 rounded-xl border border-stone-700/30"
            >
              <Skeleton width={40} height={15} className="mb-2" />
              <Skeleton width={80} height={24} />
            </div>
          ))}
        </section>

        {/* Power Levels Section */}
        <section className="mx-5">
          <div className="bg-stone-100/5 dark:bg-stone-900/50 p-6 rounded-xl border border-stone-700/30">
            <Skeleton width={120} height={20} className="mb-6" />
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <Skeleton width={60} height={14} />
                  <Skeleton width={80} height={14} />
                </div>
                <Skeleton height={8} borderRadius={4} />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <Skeleton width={100} height={14} />
                  <Skeleton width={80} height={14} />
                </div>
                <Skeleton height={8} borderRadius={4} />
              </div>
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="flex flex-col m-5 pt-2">
          <Skeleton width={150} height={24} className="mb-2" />
          <div className="space-y-2">
            <Skeleton count={4} />
          </div>
        </section>

        {/* Transformations Section Placeholder */}
        <section className="m-5">
          <Skeleton width={200} height={24} className="mb-4" />
          <div className="flex gap-4 overflow-hidden">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-48 shrink-0 bg-white dark:bg-neutral-800 rounded-lg overflow-hidden border border-neutral-700/50"
              >
                <Skeleton height={128} />
                <div className="p-3">
                  <Skeleton width="100%" height={20} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
