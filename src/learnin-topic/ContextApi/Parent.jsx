import React from 'react';

import { MyContext } from './context';



const Parent = ({children}) => {
    return (
     <MyContext.Provider value={'asad'}>
     {children}
     </MyContext.Provider>
    );
};

export default Parent;
