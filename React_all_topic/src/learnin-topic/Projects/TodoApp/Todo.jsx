import { useState } from "react";
import List from "./List";

const Todo = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  // const [date, setDate] = useState();
  const [check, setCheck] = useState(false);

  const handleList = () => {
    if (!value) return;
    if (list.includes(value)) {
      return setValue("");
    }
    setList((prevTask) => [...prevTask, value]);
    setValue("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleDeleteTask = () => {
    setList([]);
  };

  // useEffect(() =>{
  //   const timerel = setInterval(() => {
  //     const date = new Date()
  //   const currentDate  = date.toLocaleDateString()
  //   setDate(currentDate)
  //   const  currentTime = date.toLocaleTimeString()
  //   setTime(currentTime)
  //   }, 1000);
  //   return () => clearInterval(timerel)
  // },[])

  const handelDeleteList = (listTask) => {
    const deleteTask = list.filter((el) => el !== listTask);
    setList(deleteTask);
  };

  return (
    <>
      <main className="border rounded-lg flex flex-col gap-10 justify-center items-center px-10 py-4">
        <section>
          <h1 className="text-3xl font-bold">Todo app</h1>
        </section>
        {/* <section className="date_time">{date}</section> */}
        <section className="date_time">total caracter :{value.length}</section>
        <section>
          <form className="text-black" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                className="border-none outline-none py-2 rounded-3xl px-4"
                type="text"
                spellCheck="false"
                placeholder="Enter your task"
                value={value}
                onChange={(event) => setValue(event.target.value)}
              />
              <button
                className=" text-white bg-orange-700 px-2  py-2 rounded-full absolute -right-1  border-none "
                onClick={handleList}
              >
                add task
              </button>
            </div>
          </form>
          {list.map((e, i) => (
            <List
              key={i}
              value={e}
              list={list}
              handelDeleteList={handelDeleteList}
              check={check}
              setCheck={setCheck}
            />
          ))}
        </section>
        <button
          className={` capitalize text-lg px-2 py-1 rounded-md bg-red-500 font-bold`}
          onClick={handleDeleteTask}
        >
          clear all
        </button>
      </main>
    </>
  );
};

export default Todo;
