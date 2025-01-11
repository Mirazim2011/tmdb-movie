import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/Auth";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const { setIsAuthorizated } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleClick = (evt) => {
    evt.preventDefault();
    console.log({ email, password });
    axios
      .post("https://reqres.in/api/login", { email, password })
      .then((res) => {
        res.data.token && localStorage.setItem("token", res.data.token);
        setIsAuthorizated(true);
        navigate("/");
      })
      .catch((err) => {
        setError((p) => !p);
      });
  };

  return (
    <div className="bg-blue-500 flex items-center justify-center min-h-screen font-sans">
      <div className="w-96 bg-white p-8 rounded-md shadow-lg">
        <h1 className="text-center text-4xl font-bold mb-8">Login Form</h1>
        <form onSubmit={handleClick} className="flex flex-col">
          <div className="mb-4">
            <input
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              type="email"
              onChange={() => setEmail("eve.holt@reqres.in")}
            />
          </div>
          <div className="mb-4">
            <input
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <p style={{ color: "#4A90E2" }}>
              Sizda akkaunt yo‘qmi?{" "}
              <Link to="/register" style={{ color: "#E94E77" }}>
                Ro‘yxatdan o‘ting
              </Link>
            </p>

            {error && (
              <p className="text-red-500 text-sm mt-2">
                Email yoki Parol xato yozilgan!!
              </p>
            )}
          </div>
          <button
            className="w-full bg-blue-500 text-white py-3 text-lg rounded-lg hover:bg-blue-600"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
