import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Auth";

export default function PrivatePage() {
  const { setIsAuthorizated } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("token");
    setIsAuthorizated(false);
    navigate("/");
  };
  return (
    <div className="bg-[#d6daea] h-[100vh]">
      <header className="bg-blue-500 text-white p-4">
        <nav className="flex home-list flex-wrap justify-between items-center">
          <Link to={"/"}>
            <h1 className="text-xl">Private Page</h1>
          </Link>
          <ul className="flex flex-wrap justify-center items-center gap-4 mt-2 md:gap-10 md:mt-0">
            <li className="site-header__item">
              <NavLink
                to="/popular"
                className={({ isActive }) =>
                  isActive
                    ? "active text-white"
                    : "site-header__item-link text-white hover:text-gray-300"
                }
              >
                Popular
              </NavLink>
            </li>
            <li className="site-header__item">
              <NavLink
                to="/toprated"
                className={({ isActive }) =>
                  isActive
                    ? "active text-white"
                    : "site-header__item-link text-white hover:text-gray-300"
                }
              >
                Top Rated
              </NavLink>
            </li>
            <li className="site-header__item">
              <NavLink
                to="/upcoming"
                className={({ isActive }) =>
                  isActive
                    ? "active text-white"
                    : "site-header__item-link text-white hover:text-gray-300"
                }
              >
                Up Coming
              </NavLink>
            </li>
            <li>
              <button
                className="text-xl bg-red-600 p-2 rounded-xl hover:bg-red-700"
                onClick={handleClick}
              >
                Log out
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <section className="hero py-8">
        <div className="container mx-auto px-4">
          <div className="hero__inner flex flex-col-reverse md:flex-row-reverse items-center md:items-start gap-8">
            <div className="hero__main text-center md:text-left md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-teal-500">
                Xush Kelibsiz!
              </h1>
              <h2 className="text-2xl md:text-3xl mb-8 text-orange-500">
                Eng So'nggi Filmlar va Seriallar
              </h2>
              <p className="text-lg leading-7 text-black max-w-xl mx-auto md:mx-0">
                Bizning platformamizda eng mashhur va yangi filmlarni tomosha
                qiling. Har bir janr bo'yicha tanlangan eng yaxshi filmlar bilan
                dam oling va o'zingizga yoqqan narsalarni toping.
              </p>
            </div>
            <div className="hero__image flex justify-center md:justify-end w-full md:w-1/2">
              <img
                className="w-2/3 md:w-full max-w-md md:max-w-none"
                src="/Screenshot_1.png"
                alt="Platform Preview"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
