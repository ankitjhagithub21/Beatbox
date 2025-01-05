
import React from "react";

const Loader = () => {
  return (
    <div className="max-w-6xl w-full py-24 mx-auto">
      <div className="grid lg:grid-cols-5 grid-cols-3 justify-items-center">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num, index) => {
        return (
          <div className="p-2 animate-pulse" key={index}>
            <div className="h-32 w-32  bg-gray-200 rounded-lg"></div>
            <div className="h-3 w-32 mt-0.5  bg-gray-200 rounded"></div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Loader;
