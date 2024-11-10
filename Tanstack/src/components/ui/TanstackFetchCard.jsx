
import { NavLink } from 'react-router-dom';

const TanstackFetchCard = ({ data }) => {

  return (
    <>
      <li className=" overflow-hidden transition-all duration-100 ease-linear hover:shadow-[0_20px_50px_rgba(255,_255,_255,_0.7)]  px-3 py-2 rounded-lg bg-white text-black h-full ">
        <div className="flex flex-col gap-5 font-semibold ">
          <p>{data.id}</p>
          <div className="flex flex-col gap-2">
            <h2 className="capitalize "> title: {data.title}</h2>
            <p>{data.body}</p>
            <button>
            <NavLink to={`/fetchrq/${data.id}`}  >see details</NavLink>
            </button>
          </div>
        </div>
      </li>
    </>
  );
};

export default TanstackFetchCard;
