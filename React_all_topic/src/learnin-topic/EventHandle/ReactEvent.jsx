const ReactEvent = () => {
  const handleClick = (e) => {
    return console.log(e);
  };
  return (
    <>
      <div className="flex flex-col gap-6 justify-center items-center">
        <p>hello react event</p>

        {/*  function components with named function I get the function reference in this button we cant call the function with () this  either It call automaticly*/}
        <button
          onClick={handleClick}
          className="border py-2 w-fit px-3 rounded-xl bg-blue-500 font-bold capitalize "
        >
          click me
        </button>

        {/* In react we should pass perameter in  fucntion and call this fuction explicitly it is use when we use multiple function in single onclick method we should use to fat arrow fucntion  */}
        <button
          onClick={(e) => handleClick(e)}
          className="border py-2 w-fit px-3 rounded-xl bg-blue-500 font-bold capitalize "
        >
          click me
        </button>

    {/* In  inline event we doesn't define any function in outside in components, directly we use inside onClick method */}
        <button onClick={(event) => console.log(event)}>lnline Event</button>
      </div>
    </>
  );
};

export default ReactEvent;
