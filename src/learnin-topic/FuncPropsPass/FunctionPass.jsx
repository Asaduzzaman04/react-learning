
import FunctionRes from './FunctionRes';


const FunctionPass = () => {

    const hello =(e) => {
        confirm("hello" + "" + e)
    }
    
    return (
        <div>
            <FunctionRes data={hello} />
        </div>
    );
};

export default FunctionPass;