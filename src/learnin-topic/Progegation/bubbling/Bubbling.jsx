

const Bubbling = () => {
    const parentClick = (e) => {
        // e.stopPropagation()
        console.log(e.target);
    }
    return (
        <>
        <div style={{background : "#dfdfdf", padding : "4rem", borderRadius : "10px"}} className="parent" onClick={parentClick}>
            <div style={{background : "#333",  padding: "2rem",borderRadius : "10px"}} className="child" onClick={parentClick}>
                <button style={{background: "blue", padding : "1rem 2rem",borderRadius : "10px"}} className="btn" onClick={parentClick}>
                    click me
                </button>
            </div>
        </div>        
        </>
    );
};

export default Bubbling;
{/* event progation is very inportant topic and intrestine too, its a powerful concept if we don't have any idea of event popegation  for ex => when we set event in parent and child too, it will fired  and think its an bug 
[this components is  event bubbling its a by default  behaviour of javascript and its behave child to parent  => stopPropagation() use it for stop default behaviour]
*/}