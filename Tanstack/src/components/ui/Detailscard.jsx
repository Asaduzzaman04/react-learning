import { Link, useNavigate, useParams } from "react-router-dom";
import { getAxios } from "../../api/OlddataFetch";
import { useQuery } from "@tanstack/react-query";

const Detailscard = () => {
  const { title } = useParams();

  const navigate = useNavigate(); // navigate previous navigation

  //get data from api
  const handleFilter = async () => {
    const response = await getAxios();
    if (response.status === 200) {
      return response.data;
    }
  };
  //get data from tanstack;
  const { data, isLoading, isError } = useQuery({
    queryKey: ["data"],
    queryFn: handleFilter,
    staleTime: 60 * 1000 * 1000,
    gcTime: 60 * 1000 * 1000,
  });
  //filter data using filter method

  const filteredData = data?.filter((item) => item.title === title);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error fetching data.</p>;
  }

  return (
    <>
      <section className=" h-lvh flex w-full justify-center items-center">
        <div className=" w-[20%] overflow-hidden transition-all duration-100 ease-linear hover:shadow-[0_20px_50px_rgba(255,_255,_255,_0.7)]  px-3 py-2 rounded-lg bg-white text-black ">
          <div className="flex flex-col gap-5 font-semibold ">
            <p>{filteredData[0].id}</p>
            <div className="flex flex-col gap-2">
              <h2 className="capitalize "> title: {filteredData[0].title}</h2>
              <p>{filteredData[0].body}</p>

              {/* <NavLink to={`/fetchrq/${data.title}`}  >see details</NavLink> */}
              <button
                className="px-3 py-1.5 rounded-sm bg-blue-700 text-white    w-fit "
                onClick={() => navigate(-1)}
              >
                <Link> go back</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Detailscard;
