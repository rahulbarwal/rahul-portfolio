import React from "react";

type Props = {};

const LoaderSkeleton = (props: Props) => {
  return (
    <div className="shadow max-w-lg w-full mx-auto h-64">
      <div className="animate-pulse flex space-x-4">
        <div className=" bg-slate-700 h-64 w-64 rounded"></div>
        <div className="flex-1 space-y-6 py-1 h-64">
          <div className="h-2 bg-slate-700 rounded w-1/2"></div>
          <div className="h-4 bg-slate-700 rounded-xl w-3/4"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-700 rounded col-span-2"></div>
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoaderSkeleton;
