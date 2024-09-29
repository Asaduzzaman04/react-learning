import Props from './../props/Props';





const DynamicValue = () => {
    const num = [1,2,3,4,5] 
    const name = `asaduzzaman`
    
    return (
        <div className="bg-red-500 text-yellow-50 inline-flex ">
            
           {
            num.map((e,i) =>  <Props value={name} index={e}  key={i}/> ) 
           }
        </div>
    );
};

export default DynamicValue;

{/* in react we can pass  value to child components using props and by inport child components */}
{/* i render prps componen using a array length and it will render 5 times  */}
{/* React allows to write javascript functions in curly brackets including operations, function calls, and expressions that produce a vaule*/}