import axios from "axios";

const data = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com", // base URL of the API endpoint

})

export const getAxios =  () =>{
    return data.get('/posts') //get all posts
}