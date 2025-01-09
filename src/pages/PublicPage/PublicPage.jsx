import React from "react";
import { Link } from "react-router-dom";

export default function PublicPage() {
  return (
    <div>
      <header className="bg-blue-500 text-white p-4">
        <nav>
          <ul className="flex justify-center gap-10 mt-2">
            <li>
              <h1 className="text-xl">Public Page</h1>
            </li>
            <li>
              <Link to={"/login"} className="hover:underline text-xl">
                Login
              </Link>
            </li>
            <li>
              <Link to={"/register"} className="hover:underline text-xl">
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-4xl">Public Page</h1>
      </div>
    </div>
  );
}
