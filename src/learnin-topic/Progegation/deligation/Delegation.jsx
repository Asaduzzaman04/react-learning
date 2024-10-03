

const Delegation = () => {
    const handleDeligation = (e) =>{
        let info =  e.target.children
    if(info[0].style.display == "none"){
        info[0].style.display = "block"
    }else{
        info[0].style.display = "none"
    }
    }
    return (
        <>
            <ul onClick={handleDeligation} style={{background : "#dfdfdf", padding : "4rem", borderRadius : "10px",color : "#222"}}>
                <li>home <a style={{display : "none"}}>hide me</a></li>
                <li>about</li>
                <li>section</li>
                <li>blog</li>
                <li>submit</li>
            </ul>
        </>
    );
};

export default Delegation;

{/* event delegation is useful to write code efficiently we can use one fucntion in parent and control all the child element */}