


const FunctionRes = ({data}) => {
    return (
        <div>
           <button onClick={ () => data("asad")}>click for hello</button>
        </div>
    );
};

export default FunctionRes;


{/* we can get function by using (props) perameter and it  get in an object format 
    ex => {
        
        const functionRes = (props) => {
            or we can destructur prop by => const {data} = props

                return(
                    <>
                    <button onClick={props.data} >click for hello </button>
                    <button onClick={data} >click for hello </button>
                    </>
                )
            }

        }
    */}