
import { useContext } from 'react';
import { MyData } from './useData';

const useHooks = () => {
const data  = useContext(MyData)
return data
};

export default useHooks;