import { memo, useMemo } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import MovieDetailsCard from "./MovieDetailsCard";

const MovieDetails = memo(() => {
  const { title } = useParams(); // title from params  it should be in the path  /products/:title
  const data = useLoaderData(); //loader data
  const porductsDetails = useMemo(() => {
    return data.find((item) => item.title === title);
  });

  return (
    <>
      <MovieDetailsCard porductsDetails={porductsDetails} />
    </>
  );
});

export default MovieDetails;
