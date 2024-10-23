import { useCallback } from "react";

const useImageStore =async () => {
try {
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();
    return result;
} catch (error) {
    console.log(error);
}
};

export default useImageStore;
