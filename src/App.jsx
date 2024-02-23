import MovieList from "./components/MovieList";
import { useEffect, useState } from "react";
const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const getall = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=9170da0ea048266ce68f58be38d0ef85&language=en-US&page=1"
      );
      const data = await res.json();
      setMovies(data.results);
    };

    const getsearch = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=9170da0ea048266ce68f58be38d0ef85&language=en-US&page=1&query=${search}`
      );
      const data = await res.json();
      setMovies(data.results);
      console.log(data.results, search);
    };

    search === "" ? getall() : getsearch();
  }, [search]);
  return (
    <>
      <div className="max-w-[90vw] shadow-xl h-[100vh] mx-auto  overflow-auto ">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-black outline-none mx-auto p-4 rounded-md text-xl mb-4  sticky top-0 bg-white"
          placeholder="Enter the Movie to Search"
        />
        <MovieList movies={movies} />
      </div>
    </>
  );
};

export default App;
