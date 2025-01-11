import React from "react";
import { Link } from "react-router-dom";
import "./Public.css";

export default function PublicPage() {
  return (
    <div className="bg-[#d6daea] h-[100vh]">
      <header className="bg-blue-500 text-white p-4">
        <nav className="flex home-list flex-wrap justify-between items-center">
          <Link to={"/"}>
            <h1 className="text-xl">Public Page</h1>
          </Link>
          <ul className="flex flex-wrap justify-center items-center gap-4 mt-2 md:gap-10 md:mt-0">
            <li>
              <Link
                to={"/login"}
                className="hover:underline text-xl text-white"
              >
                Tizimga Kirish
              </Link>
            </li>
            <li>
              <Link
                to={"/register"}
                className="hover:underline text-xl text-white"
              >
                Ro‘yxatdan o‘tish
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <section className="hero py-10 md:py-20">
        <div className="container mx-auto px-4">
          <div className="hero__inner flex flex-col-reverse md:flex-row items-center md:items-start">
            <div className="hero__main text-center md:text-left md:w-1/2">
              <h1 className="hero-heading text-3xl md:text-5xl font-bold text-teal-500 mb-6">
                Eng So'nggi Filmlar va Seriallar
              </h1>
              <p className="hero__text text-lg text-gray-700 leading-7 max-w-2xl mx-auto md:mx-0 mb-6">
                Bizning platformamizda eng mashhur va yangi filmlarni tomosha
                qiling. Har bir janr bo'yicha tanlangan eng yaxshi filmlar bilan
                dam oling va o'zingizga yoqqan narsalarni toping.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start custom-breakpoint:flex-col">
                <Link
                  className="hero__btn bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-600 transition-colors duration-300"
                  to={"/register"}
                >
                  Ro'yhatdan o'tish
                </Link>
                <Link
                  className="bg-amber-500 text-white text-lg font-medium px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors duration-300"
                  to={"/login"}
                >
                  Tizimga kirish
                </Link>
              </div>
            </div>
            <div className="hero__image flex justify-center md:w-1/2 mb-8 md:mb-0">
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
