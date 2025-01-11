import Item from "../Item/Item";
import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Auth";
export default function UpComing() {
  const { setIsAuthorizated } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("token");
    setIsAuthorizated(false);
    navigate("/");
  };
  return (
    <div>
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
      <Item />
    </div>
  );
}
