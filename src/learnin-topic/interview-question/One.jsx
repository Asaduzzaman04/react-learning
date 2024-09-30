

const One = () => {
    const stu = []
    
    return (
        <>
            <div>
                <p >{!stu.length  && "student not found"}</p>
                <p>Total student is : {stu.length}</p>
            </div>
        </>
    );
};

export default One;
{/* question  => if the value is false,null,undefined, what is show the output on react   */}
{/* ans => react doesn't  shows the false value , if the value is false or boolean the output always will be Zero(_0_) */}