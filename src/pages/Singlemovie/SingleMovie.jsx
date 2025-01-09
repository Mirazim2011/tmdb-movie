import { Link, NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
function SingleMovie() {
  const [movieData, setMovieData] = useState({});
  const params = useParams();
  let id = params.movieId;
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=17f1ceadcf3767a35e55dd6204800668`
    )
      .then((res) => res.json())
      .then((data) => setMovieData(data));
  }, []);
  const formatRuntime = (runtime) => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours} soat ${minutes} minut`;
  };
  const handleClick = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };
  return (
    <>
      <header className="bg-blue-500 text-white p-4">
        <nav>
          <ul className="flex justify-center items-center gap-10 mt-2">
            <li>
              <Link to={"/"}>
                <h1 className="text-xl">Private Page</h1>
              </Link>
            </li>
            <li>
              <NavLink
                to="/popular"
                className={({ isActive }) =>
                  isActive ? "text-white underline" : "text-gray-300"
                }
              >
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/toprated"
                className={({ isActive }) =>
                  isActive ? "text-white underline" : "text-gray-300"
                }
              >
                Top Rated
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/upcoming"
                className={({ isActive }) =>
                  isActive ? "text-white underline" : "text-gray-300"
                }
              >
                Up Coming
              </NavLink>
            </li>
            <li>
              <button
                className="text-xl bg-red-600 p-2 rounded-xl"
                onClick={handleClick}
              >
                Log out
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <div
        className="pt-12 pb-24 bg-cover w-full h-screen"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movieData.backdrop_path})`,
        }}
      >
        <h1 className="text-center text-4xl text-white">SingleMovie</h1>
        <div className="flex flex-col sm:flex-row bg-black p-6 rounded-lg max-w-5xl mx-auto mt-6 gap-6">
          <div className="flex-shrink-0">
            <img
              src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`}
              className="w-80 h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col gap-4 text-white">
            <h2 className="text-2xl font-bold">{movieData.original_title}</h2>
            <p>
              <span className="font-bold">Genres: </span>
              {movieData.genres && movieData.genres.length > 0
                ? movieData.genres.map((genre) => genre.name).join(", ")
                : "N/A"}
            </p>
            <p>
              <span className="font-bold">Runtime: </span>
              {movieData.runtime ? formatRuntime(movieData.runtime) : "N/A"}
            </p>
            <p>
              <span className="font-bold">Budget:</span> {movieData.budget}$
            </p>
            <p>
              <span className="font-bold">Overview:</span> {movieData.overview}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleMovie;
