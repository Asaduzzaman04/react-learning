import { useQuery } from "@tanstack/react-query";
import { getAxios } from "./../api/OlddataFetch";
import TanstackFetchCard from "./../components/ui/TanstackFetchCard";

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
    queryFn: handleTenData, //in tanstack queryfn works alternatively useEffect
  });

  return (
    <div className=" flex flex-col justify-center items-center">
      <div>
        <p>i am fetched by tanstack query</p>
      </div>

      <div>
        <ul className=" py-5 mt-10 gap-2 md:gap-4 lg:gap-8 px-2  grid justify-center  items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data?.map((item) => (
            <TanstackFetchCard
              key={item.id}
              data={item}
              others={{ error, isLoading }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Fetchrq;
