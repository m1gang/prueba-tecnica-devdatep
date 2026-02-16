import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const CharacterCardSkeleton = () => {
  return (
    <div className="bg-white dark:bg-card-dark rounded-xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-800">
      {/* Image Placeholder */}
      <div className="aspect-4/5 w-full">
        <Skeleton height="100%" />
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div className="w-full mr-4">
            {/* Name */}
            <Skeleton height={24} width="80%" />
            {/* Affiliation */}
            <Skeleton height={14} width="60%" className="mt-2" />
          </div>
          {/* Star Icon */}
          <Skeleton circle width={32} height={32} />
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex justify-between">
            <Skeleton width={40} />
            <Skeleton width={60} />
          </div>
          {/* Progress Bar */}
          <Skeleton height={6} />
        </div>
      </div>
    </div>
  );
};
