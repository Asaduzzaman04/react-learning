
import { Link, useNavigate } from 'react-router-dom';

const NavigateButton = () => {
    const naviGateButton = useNavigate(); // useNavigate remember the previous page and while call this hooks in click event it it  back to previous page
    return (
        <>
            <Link onClick={()=> naviGateButton(-1)} className=" w-fit  rounded-lg bg-red-500 px-6 py-3 text-center text-base font-semibold text-white transition hover:bg-red-400 ">Go back to previous page</Link>
        </>
    );
};

export default NavigateButton;