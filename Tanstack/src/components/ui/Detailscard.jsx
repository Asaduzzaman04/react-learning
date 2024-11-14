import { Link, useNavigate, useParams } from "react-router-dom";
import {  getItemsAxios } from "../../api/OlddataFetch";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";

const DetailsCard = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Function to fetch data from the API
  const fetchFilteredData = async (postId) => {
    const response = await getItemsAxios(postId);
    if (response.status === 200) {
      return response.data;
    }
  };

  // Using react-query to fetch data
  const { data, isLoading, isError } = useQuery({
    queryKey: ["items", id],
    queryFn: () => fetchFilteredData(id),
    staleTime: 60 * 60 * 1000, // 1 hour in milliseconds
    gcTime: 60 * 60 * 1000,    // 1 hour in milliseconds
  });


  

  // Loading and error states
  if (isLoading) return <p className="text-5xl font-bold w-full h-lvh flex justify-center items-center">Loading...</p>;
  if (isError) return <p>Error fetching data.</p>;

  return (
    <section className="h-lvh flex w-full justify-center items-center">
      <div className="w-[20%] overflow-hidden transition-all duration-100 ease-linear hover:shadow-[0_20px_50px_rgba(255,255,255,0.7)] px-3 py-2 rounded-lg bg-white text-black">
        <div className="flex flex-col gap-5 font-semibold">
          <motion.p
          
          >{data.id}</motion.p>
          <div className="flex flex-col gap-2">
            <motion.h2
             initial={{x:300}}
             animate={{x:0}}
             transition={{ duration:1}}
            className="capitalize">Title: {data.title}</motion.h2>
            <motion.p
            initial={{x:-100}}
            animate={{x:0}}
            transition={{ duration:1}}
            >{data.body}</motion.p>

            <button
              className="px-3 py-1.5 rounded-sm bg-blue-700 text-white w-fit"
              onClick={() => navigate(-1)}
            >
              <Link to="#">Go Back</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsCard;
