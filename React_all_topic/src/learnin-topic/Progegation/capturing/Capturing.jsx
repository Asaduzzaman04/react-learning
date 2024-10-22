

const Capturing = () => {

    const handleCapture = (event) => {
        console.log(event.currentTarget);
    }
    return (
        <>
            <div onClickCapture={handleCapture} className="container" style={{background : "#dfdfdf", padding : "4rem", borderRadius : "10px"}}>
                <div onClickCapture={handleCapture} className="child_one" style={{background : "#333",  padding: "2rem",borderRadius : "10px"}}>
                    <button onClickCapture={handleCapture} className="btn" style={{background: "blue", padding : "1rem 2rem",borderRadius : "10px"}}>
                        click me for capture
                    </button>
                </div>
            </div>
        </>
    );
};

export default Capturing;
{/* In bubbling we see that event fired in child to parent but in capturing face event captured parent to child [top to down]  */}