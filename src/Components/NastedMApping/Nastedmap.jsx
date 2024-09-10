import Rander from "./Rander";


const Nastedmap = () => {
    const dataAll = [
        {
            names : 'mr.x',
            address : {
                country : 'north korea'
            }
        },
        {
            names : 'mr.y',
            address : {
                country : 'china'
            }
        },
        {
            names : 'mr.z',
            address : {
                country : 'russia'
            }
        },
    ]
    return (
        <div>
            {
                dataAll.map((info,i) => <Rander key={i} values={info}/>)
            
            }
        </div>
    );
};

export default Nastedmap;