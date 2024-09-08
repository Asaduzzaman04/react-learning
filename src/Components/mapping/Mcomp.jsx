const Mcomp = ({ title }) => {
  return (
    <div className="w-[80%] mx-auto flex flex-col md:flex-row justify-center  border bg-lime-400 p-7">

      <p className="bg-slate-700">{title.address.street}</p>
      <p className="bg-slate-700">{title.id}</p>
      
    </div>
  );
};

export default Mcomp;
