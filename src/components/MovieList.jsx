import SingleMovie from "./SingleMovie";

const MovieList = (some) => {
  const boxes = some.movies.map((movie) => {
    return <SingleMovie key={movie.id} movie={movie} />;
  });

  return (
    <>
      <div className="grid sm:grid-cols-3 gap-2">{boxes}</div>
    </>
  );
};

export default MovieList;
