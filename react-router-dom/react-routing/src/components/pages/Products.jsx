import { useLoaderData, useNavigation } from "react-router-dom";
import Loader from "./../loader/Loader";

const Products = () => {
  const data = useLoaderData(); // useLoaderData is a build in this hook for fetch data hook without useEffect.

  {
    /*const loader = useNavigation() this hook is use for loader loading. and a Global loading indicators showing up.
if(loader.state === 'loading'){
  return <Loader/>
}*/
  }
  return (
    <div>
      <ul className="grid grid-cols-4 gap-10 justify-center items-center">
        {data.map((item, index) => (
          <li key={index}>
            <img className=" aspect-square" src={item.image} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
