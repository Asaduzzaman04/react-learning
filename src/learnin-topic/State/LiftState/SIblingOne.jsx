/* eslint-disable react/prop-types */
import { globals } from 'globals';


const SIblingOne = ({setChar}) => {

 return (
        <div>
            <input  className="placeholder:text-violet-600 text-black" type="text" placeholder="enter your full name" onChange={(e) => setChar(e.target.value)} />
        </div>
    );
};

export default SIblingOne;