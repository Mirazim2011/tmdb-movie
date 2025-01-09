import React from "react";
import { Link, useLoaderData } from "react-router-dom";

export default function Item() {
  const data = useLoaderData();
  return (
    <div>
      <ul className="flex flex-wrap justify-center items-center gap-4 list-none mt-4">
        {data.results.map((film) => (
          <li key={film.id} className="">
            <Link
              to={`/${film.id}`}
              className="flex flex-col sm:flex-row bg-gray-900 rounded-lg p-6 gap-5 w-full sm:w-[700px] h-auto sm:h-[540px] text-white"
            >
              <img
                src={`https://image.tmdb.org/t/p/original${film.poster_path}`}
                className="w-[300px] h-[500px] rounded-lg object-cover"
              />
              <div className="flex flex-col gap-4">
                <h3 className="text-3xl font-semibold">{film.title}</h3>
                <p className="text-base">Id: {film.id}</p>
                <p className="text-base">Overview: {film.overview}</p>
                <p className="text-base">Date: {film.release_date}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
