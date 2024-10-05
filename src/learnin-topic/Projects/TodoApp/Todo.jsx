import { useState } from "react";
import List from './List';


const Todo = () => {
    const [value,setValue] = useState('')
 const [list,setList] = useState([])


 const handleList = () => {
    if(!value) return
    setList((prevTask) => [...prevTask,value])
 }


 const handleSubmit = (e) => {
        e.preventDefault()
 }

    return (
        <>
            <main className="border flex flex-col gap-10 justify-center items-center px-10 py-4">
                <section>
                    <h1 className="text-3xl font-bold">Todo app</h1>
                </section>
                <section>
                    <form className="text-black" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input className="border-none outline-none py-2 rounded-3xl px-4" type="text" spellCheck="false" placeholder="Enter your task" value={value} onChange={(event) => setValue(event.target.value)} />
                        <button className="border text-white bg-orange-700 px-2  py-2 rounded-full absolute right-0  border-none " onClick={handleList}>add task</button>
                        </div>
                    </form>
                    <List value={list} key={list.indexOf()}/>
                </section>
            </main>
        </>
    );
};

export default Todo;