import { useLoaderData } from "react-router-dom";

const Products = () => {
  const data = useLoaderData(); // useLoaderData is a build in this hook for fetch data hook without useEffect.

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
