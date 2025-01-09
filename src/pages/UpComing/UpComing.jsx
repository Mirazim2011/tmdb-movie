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
        <nav>
          <ul className="flex justify-center items-center gap-10 mt-2">
            <li>
              <Link to={"/"}>
                <h1 className="text-xl">Private Page</h1>
              </Link>
            </li>
            <li className="site-header__item">
              <NavLink
                to="/popular"
                className={({ isActive }) =>
                  isActive ? "active" : "site-header__item-link"
                }
              >
                Popular
              </NavLink>
            </li>
            <li className="site-header__item">
              <NavLink
                to="/toprated"
                className={({ isActive }) =>
                  isActive ? "active" : "site-header__item-link"
                }
              >
                Top Rated
              </NavLink>
            </li>
            <li className="site-header__item">
              <NavLink
                to="/upcoming"
                className={({ isActive }) =>
                  isActive ? "active" : "site-header__item-link"
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
      <Item />
    </div>
  );
}
