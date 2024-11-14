
import { useQuery } from "@tanstack/react-query";
import TanstackFetchCard from "./../components/ui/TanstackFetchCard";
import { getAxios } from "../api/OlddataFetch";

//fetch data using tanstack
//dont need to use state while using tanstack
const Fetchrq = () => {
  // getAxios
  const handleTenData = async () => {
    const response = await getAxios();
    try {
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["data"], //in tanstack  querykey works alternatively usestate;

    queryFn: handleTenData, //in tanstack queryfn works alternatively useEffect;

    staleTime: 60 * 1000 * 1000,

    //In React Query, stale time defines how long fetched data remains fresh before being marked as stale and needing a refetch;

    gcTime: 60 * 1000 * 1000,
    //In React Query, GC Time (controlled by cacheTime) specifies how long inactive query data stays cached before being garbage collected;

    //refetchInterval: 1000,
    //The `prefetchInterval` in TanStack Query specifies the time interval (in milliseconds) at which data will automatically be refetched to keep it updated;

    //refetchIntervalInBackground: true,
    //it automatically be refetched to keep it updated in background by default false
  });

  

  return (
    <div className=" flex flex-col justify-center items-center">
      <div>
        <p className="capitalize font-semibold">
          i am fetched by tanstack query
        </p>
      </div>
      <div>
        <ul className="py-5 mt-10 gap-2 md:gap-4 lg:gap-8 px-2  grid justify-center  items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data?.map((item) => (
            <TanstackFetchCard
              key={item.id}
              data={item}
              
              others={{ error, isLoading}}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Fetchrq;
