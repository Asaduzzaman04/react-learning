import React from "react";

const Loader = () => {
  return (
    <>
      <main className="w-full h-lvh flex justify-center items-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"></div>
          <h2 className="text-white mt-4 font-bold text-3xl">Loading...</h2>
          <p className="text-zinc-400 text-xl font-semibold">
            Your adventure is about to begin
          </p>
        </div>
      </main>
    </>
  );
};

export default Loader;
