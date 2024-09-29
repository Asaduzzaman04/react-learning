


const Conditional = () => {
    // const promot = prompt("enter your age")
    // let canWatch = "watch"
    // if(age < 18) canWatch = "not available";
    
    const age  = 10
    return (
        <>
            <button className="shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-black text-white px-10 py-3 font-bold capitalize text-3xl mx-[0_auto] rounded-xl hover:shadow-[0_0px_50px_rgba(8,_112,_184,_0.7)] transition-all duration-300 ease-linear hover:scale-95 hover:-translate-y-7">{age < 18 ? "not available" : "watch now"}</button>
{/* 
            <button className="shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-black text-white px-10 py-3 font-bold capitalize text-3xl mx-[0_auto] rounded-xl hover:shadow-[0_0px_50px_rgba(8,_112,_184,_0.7)] transition-all duration-300 ease-linear hover:scale-95 hover:-translate-y-7">{canWatch}</button> */}

        </>
    );
};

export default Conditional;
{/* 
        in react we can easily change value by conditional rendering it more efficient way to write code insted of vanilla javascript 
    */}