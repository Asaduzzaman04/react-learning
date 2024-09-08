const PropDes = ({ fullDetails }) => {
  const {
    userName: name,
    userId: id,
    userDesicnation: Desicnation,
  } = fullDetails;
  return (
    <>
      <div className="w-[35%] border flex flex-col justify-center items-center gap-5 px-5 py-3 bg-black shadow-[0px_3px_2px] hover:-translate-y-2 transition-all duration-300  rounded-md">
    
        <p className="text-2xl font-bold uppercase">{name}</p>
        <p className="text-xl font-bold uppercase">{id}</p>
        <p className="text-xl font-bold uppercase">{Desicnation}</p>
      </div>
    </>
  );
};

export default PropDes;
