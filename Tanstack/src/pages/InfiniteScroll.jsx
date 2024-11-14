import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchUsersScroll } from "../api/OlddataFetch";
import { useEffect } from "react";

const InfiniteScroll = () => {
  //to set scroll data with previous

  //useinfiniteScroll hooks for infinite scrolling
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["InfiniteScroll"],
    staleTime: 11111111,
    queryFn: fetchUsersScroll,
    getNextPageParam: (lastPage, allPage) => {
      return lastPage.length === 5 ? allPage.length + 1 : undefined;
    },
  });



  //scroll functions for infinite
  const handleScroll = () => {
    const scroll =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 50;
    if (scroll && hasNextPage) {
      fetchNextPage();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasNextPage]);

  return (
    <>
      <div>
        {data?.pages.map((item) => {
          return item.map((datas) => {
            return (
              <div
                key={datas.id}
                className="flex flex-col justify-center items-center gap-5"
              >
                <div className="card card-side bg-base-100 shadow-xl">
                  <figure>
                    <img
                      className="w-full aspect-auto h-full"
                      src={datas.avatar_url}
                      alt="Movie"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">
                        {datas.user_view_type}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          });
        })}
      </div>
    </>
  );
};

export default InfiniteScroll;
