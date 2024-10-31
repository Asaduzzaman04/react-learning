import axios from "axios";
import { useEffect, useState } from "react";

const UseAxios = () => {
  const [data, setData] = useState([]);
  const api = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(api);
        setData(response);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return [data];
};

export default UseAxios;
