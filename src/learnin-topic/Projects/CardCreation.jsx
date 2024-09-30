import { useEffect, useState } from "react";
import Cards from './Cards';
import Nabvar from './../components/Nabvar';
import Footer from './../components/Footer';




const CardCreation = () => {
  const [list, setList] = useState([]);
  const [errors, setError] = useState();

  useEffect(() => {
    let url = "https://fakestoreapi.com/products";
    const getData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("!opps server not found");
        }
        const data = await response.json();
        setList(data);
      } catch (err) {
        setError(err);
      }
    };
    getData();
  }, []);



  return (
    <>
       
      <section >
       <div className="mb-4">
       <Nabvar/>
       </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-5 md:gap-4 justify-center items-center">
        {
          list.map((e) => <Cards value={e} key={e.id}/>)
        }
      </div>
      <div>
        <Footer/>
      </div>
      </section>
    </>
  );
};

export default CardCreation;


{/*this is my project one which i use a api and dynamically use card using map method !!! */}