

const Props = ({value, index}) => { 
    return (
        <div>
            {
                <p ><span>{index}</span>{value}</p>
            }
        </div>
    );
};

export default Props;

{/* we can catch the props value in the function perameter by curly brackets and assign this where we needs thats the advantage of react js //declaretive programming */}
{/* we should always use curly brackets when  pass a  dynamic value */}