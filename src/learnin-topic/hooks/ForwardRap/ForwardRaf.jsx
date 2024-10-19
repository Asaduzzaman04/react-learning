
import { useRef } from 'react';
import ChildRef from './ChildRef';

const ForwardRaf = () => {
    const userName = useRef(null)
const handleSubmit = (e) =>{
    e.preventDefault()
console.log(userName.current.value);
}
    return (
        <div className='text-black'>
           <form onSubmit={handleSubmit}>
           <ChildRef ref={userName} value={'enter your name'}/>
           <button className='bg-indigo-50 font-bold mt-3 rounded-lg'>submit</button>
           </form>
        </div>
    );
};

export default ForwardRaf;
{/*forwardRef() in React is a higher-order component used to forward refs to a child component. This is especially useful when you want a parent component to directly interact with a DOM element or a class component’s methods in a child component. */}