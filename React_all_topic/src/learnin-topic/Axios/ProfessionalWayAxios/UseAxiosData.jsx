import axios from "axios";
import { useEffect } from "react";

const UseAxiosData = () => {
  const [axiosData, setAxiosData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await data.get("");
      setAxiosData(response);
    };
    getData();
  }, []);
  return [axiosData];
};

export default UseAxiosData;

export const data = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/users", // Replace with  API's base URL
});
