import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteItemAxios, getAxios } from './../api/OlddataFetch';

const DeletePost = () => {

    const {data,} =  useQuery({
        queryKey: ['deletePost',],
        queryFn:async ()  => {
         const response = await   getAxios();
         if(response.status === 200) {
             return response.data;
         }
        }
    })


    const query = useQueryClient()
    const handleDeletePost = useMutation({
        mutationKey: ['deletePost',],
        mutationFn : (postId) =>  deleteItemAxios(postId),
        onSuccess: (_, postId) => {
            query.setQueryData(['deletePost'], (elem) =>{
                return elem.filter((item) => item.id!== postId)
            })
        }
    })


    return (
      <section className="flex flex-col gap-5">
{
    data && data.map((data) =>{
        return (
            <div className="border  w-fit" key={data.id}>
                <h1>id: {data.id}</h1>
                <h1>Title: {data.title}</h1>
                <p>Content: {data.content}</p>
                <button onClick={() => handleDeletePost.mutate(data.id)}>Delete</button>
            </div>
        )
    })
}
      </section>
    );
};

export default DeletePost;