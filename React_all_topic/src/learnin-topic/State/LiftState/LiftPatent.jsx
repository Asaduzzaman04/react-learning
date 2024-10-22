import { useState } from "react";
import SIblingOne from './SIblingOne';
import SiblingTwo from './SiblingTwo';


const LiftPatent = () => {
    const [char, setChar] = useState('')


    return (
        <div>
            <SIblingOne setChar={setChar} />
            <SiblingTwo char={char} />
        </div>
    );
};

export default LiftPatent;
{/* Lifting the state up => we cant sent data to sibling only possible at parent to child but when some data went to sent sibling to sibling we use lift the state up 
explain => {
define a state in parent component and sent set function to fetching childComponents as  prop,
and initial state value sent to get childComponents  as props ,
 [its the details   explaintion by me]
 }
    */}