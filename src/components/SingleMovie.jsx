const SingleMovie = (some) => {
  return (
    <div
      className="items-center text-center border-[2px] min-h-[280px]"
      key={some}
    >
      <img
        src={`https://image.tmdb.org/t/p/original/${some.movie.poster_path}`}
        className="w-full object-cover"
        alt={some.movie.title}
      />
      <div className="flex justify-between">
        <span className="text-xl font-bold">{some.movie.title}</span>
        <span className="text-xl font-bold text-yellow-600">
          {some.movie.vote_average}
        </span>
      </div>
    </div>
  );
};

export default SingleMovie;
