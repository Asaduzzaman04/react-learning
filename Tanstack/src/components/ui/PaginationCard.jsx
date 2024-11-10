
const PaginationCard = ({data}) => {
    return (
        <>
            
            <li className="shrink-1 w-full overflow-hidden transition-all duration-100 ease-linear hover:shadow-[0_20px_50px_rgba(255,_255,_255,_0.7)]  px-3 py-2 rounded-lg bg-blue-300 text-black h-full ">
        <div className="flex flex-col gap-5 font-semibold ">
          <p>{data.id}</p>
          <div className="flex flex-col gap-2">
            <h2 className="capitalize "> title: {data.title}</h2>
            <p>{data.body}</p>
          </div>
        </div>
      </li>
        </>
    );
};

export default PaginationCard;