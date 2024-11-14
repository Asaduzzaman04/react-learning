import axios from "axios";

// Create a new instance of axios with the base URL of the API
const data = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
//get all data from api
export const getAxios = () => {
  return data.get("/posts"); //get all posts
};

//get single item
export const getItemsAxios = (id) => {
  return data.get(`/posts/${id}`);
};

//get data by pagination method
export const paginationData = (page) => {
  return data.get(`/posts?_page=${page}&_limit=${6}`); //get first 10 posts
};

//delete single item

export const deleteItemAxios = (id) => {
  return data.delete(`/posts/${id}`);
};
