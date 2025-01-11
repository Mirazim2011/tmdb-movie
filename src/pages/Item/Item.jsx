import React from "react";
import { Link, useLoaderData } from "react-router-dom";

export default function Item() {
  const data = useLoaderData();
  return (
    <div>
      <ul className="flex flex-wrap justify-center items-center gap-6 list-none mt-6">
        {data.results.map((film) => (
          <li key={film.id} className="w-full sm:w-auto">
            <Link
              to={`/${film.id}`}
              className="flex flex-col sm:flex-row bg-gray-900 rounded-lg p-4 gap-4 sm:gap-5 w-full sm:w-[700px] h-auto sm:h-[540px] text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={`https://image.tmdb.org/t/p/original${film.poster_path}`}
                alt={film.title}
                className="w-full sm:w-[300px] h-auto sm:h-[500px] rounded-lg object-cover"
              />
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl sm:text-3xl font-semibold">
                  {film.title}
                </h3>
                <p className="text-sm sm:text-base">Id: {film.id}</p>
                <p className="text-sm sm:text-base">
                  Overview: {film.overview}
                </p>
                <p className="text-sm sm:text-base">
                  Date: {film.release_date}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
