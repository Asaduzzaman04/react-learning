import { NavLink } from "react-router-dom";

const TanstackFetchCard = ({ data, }) => {
  return (
    <>
      <li className=" overflow-hidden transition-all duration-100 ease-linear hover:shadow-[0_20px_50px_rgba(255,_255,_255,_0.7)]  px-3 py-2 rounded-lg bg-white text-black h-full ">
        <div className="flex flex-col gap-5 font-semibold ">
          <p>{data.id}</p>
          <div className="flex flex-col gap-2">
            <h2 className="capitalize "> title: {data.title}</h2>
            <p>{data.body}</p>
            <div className="w-full flex items-center  justify-around mt-5">
              <button className="capitalize  transition-all duration-150 ease-linear active:scale-95 px-3  py-1 rounded-md  bg-blue-600 text-white ">
                <NavLink to={`/fetchrq/${data.id}`}>see details</NavLink>
              </button>
              <button
                className="capitalize  transition-all duration-150 ease-linear active:scale-95 px-3  py-1 rounded-md  bg-red-500 text-white"
              >
                delete
              </button>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default TanstackFetchCard;
