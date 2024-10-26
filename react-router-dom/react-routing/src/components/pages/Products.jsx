import { NavLink, useLoaderData } from "react-router-dom";

const Products = () => {
  const data = useLoaderData(); // useLoaderData is a build in this hook for fetch data hook without useEffect.

  return (
    <div>
      <ul className="grid grid-cols-4 gap-10 justify-center items-center">
        {data.map((item, index) => (
          <li
            key={index}
            className="flex flex-col justify-center items-center gap-5"
          >
            <img
              className=" aspect-square object-cover rounded-xl shadow-lg"
              src={item.image}
              alt=""
            />
            <NavLink
              className={`  px-3 py-1 rounded-md bg-red-500 text-xl font-bold text-white`}
              to={`/products/${item.title}`}
            >
              show details
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
{
  /*const loader = useNavigation() this hook is use for loader loading. and a Global loading indicators showing up.
if(loader.state === 'loading'){
return <Loader/>
}*/
}
