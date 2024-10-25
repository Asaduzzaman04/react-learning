

const MovieDetailsCard = ({porductsDetails}) => {
    
    return (
      <>
     
     <main className="w-full mx-auto">
        <div className=" flex flex-col  gap-4 pb-3 px-3  justify-center items-center  my-4 bg-blue-400 rounded-xl  w-[40%]">
          <img
            src={porductsDetails.image}
            className="w-full  rounded-t-md hover:-translate-y-3 transition-all duration-200 ease-linear "
            alt={porductsDetails.title}
          />
          <h1 className="font-bold ">{porductsDetails.title}</h1>
          <p className=" font-semibold">{porductsDetails.description}</p>
          
        </div>
      </main>
      </>
    );
};

export default MovieDetailsCard;