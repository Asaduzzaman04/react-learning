import Mcomp from "./Mcomp";
import data from "../../../public/data.json";
const Mdata = () => {
  // for( let detail in data) {
  //     details.push(<Mcomp title={data[detail]}/>)
  // }
  // let  details = []
  // details = data.map((i) => <Mcomp title={i}/>)
  return (
    <>
      {data.map((item, idx) => (
        <Mcomp title={item} key={idx} />
      ))}
    </>
  );
};

export default Mdata;
