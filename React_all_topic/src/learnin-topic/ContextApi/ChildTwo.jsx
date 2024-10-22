import React, { useContext } from 'react';
import { MyContext } from './context';

const ChildTwo = () => {
    const name = useContext(MyContext)
    return (
        <div>
            <p> second com {name}</p>
        </div>
    );
};

export default ChildTwo;