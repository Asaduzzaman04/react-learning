import { useState } from "react";
import { paginationData } from "./../api/OlddataFetch";
import { useQuery } from "@tanstack/react-query";
import PaginationCard from "./../components/ui/PaginationCard";

const Pagination = () => {
  //initialize page number
  const [pageNumber, setPageNumber] = useState(1);

  //decriment the page number
  const handlePageDecriment = () => {
    if (pageNumber > 1) {
      setPageNumber((prev) => prev - 1);
    }
    return;
  };
  //increment the page number
  const handlePageIncriment = () => {
    if (pageNumber < 17) {
      setPageNumber((prev) => prev + 1);
    }
    return;
  };
  //post   page number in axios
  const handlePaginations = async (pages) => {
    const response = await paginationData(pages);
    if (response.status === 200) {
      return response.data;
    }
  };
  //get the posts using page number by tanstack
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["pagination", pageNumber],
    queryFn: () => handlePaginations(pageNumber),
    staleTime: 60 * 1000 * 100,
    gcTime: 60 * 1000 * 100,
  });

  if (isLoading) {
    return (
      <div className="w-full h-lvh text-7xl font-bold flex justify-center items-center">
        Loading...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full h-lvh text-7xl font-bold flex justify-center items-center">
        {error.message}
      </div>
    );
  }


  return (
    <>
      <main className="flex w-full h-lvh flex-col justify-center items-center">
        <div>
          <ul className="py-5 mt-10 gap-2 md:gap-4 lg:gap-8 px-2  grid justify-center  items-center grid-cols-1 md:grid-cols-3   ">
            {data?.map((item) => (
              <PaginationCard
                key={item.id}
                data={item}
                others={{ isError, isLoading }}
              />
            ))}
          </ul>
        </div>

        <div className=" py-10 justify-center items-center flex gap-10">
          <button
            disabled={pageNumber <= 1}
            onClick={handlePageDecriment}
            className=" px-5 py-2 rounded-md active:scale-95 transition-all duration-150 ease-linear bg-slate-800 active:bg-blue-900 font-semibold text-xl"
          >
            prev page
          </button>
          <h2 className="text-xl font-semibold rounded-full bg-slate-700  px-4 py-1.5 ">
            {pageNumber}
          </h2>
          <button
            disabled={pageNumber >= 17}
            onClick={handlePageIncriment}
            className=" px-5 py-2 rounded-md active:scale-95 transition-all duration-150 ease-linear bg-slate-800 active:bg-blue-900 font-semibold text-xl"
          >
            next page
          </button>
        </div>
      </main>
    </>
  );
};

export default Pagination;
