import { useEffect, useState } from "react";
import { getAxios } from "../api/OlddataFetch";

const useOldFetch = () => {
  const [userData, setUserData] = useState([]);

  const handlegetdata = async () => {
    const data = await getAxios();
    data.status === 200 ? setUserData(data.data) : [];
  };

  useEffect(() => {
    handlegetdata();
  }, []);
  return [userData];
};

export default useOldFetch;
