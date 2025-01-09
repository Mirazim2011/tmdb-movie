import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import PrivatePage from "./pages/PrivatePage/PrivatePage";
import Login from "./pages/Login/Login";
import PublicPage from "./pages/PublicPage/PublicPage";
import Popular from "./pages/Popular/Popular";
import UpComing from "./pages/UpComing/UpComing";
import TopRated from "./pages/TopRated/TopRated";
import SingleMovie from "./pages/Singlemovie/SingleMovie";
import Register from "./pages/Register/Register";
import { useContext } from "react";
import { AuthContext } from "./pages/context/Auth";
import { PrivateRoute } from "./pages/PrivateRoute/PrivateRoute";
function App() {
  const popular = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=17f1ceadcf3767a35e55dd6204800668"
    );
    const data = await response.json();
    return data;
  };
  const toprated = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=17f1ceadcf3767a35e55dd6204800668"
    );
    const data = await response.json();
    return data;
  };
  const upcoming = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=17f1ceadcf3767a35e55dd6204800668"
    );
    const data = await response.json();
    return data;
  };
  const { isAuthorizated } = useContext(AuthContext);
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: isAuthorizated ? <PrivatePage /> : <PublicPage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/popular",
      element: (
        <PrivateRoute isAuthorizated={isAuthorizated}>
          <Popular />
        </PrivateRoute>
      ),
      loader: popular,
    },
    {
      path: "/upcoming",
      element: (
        <PrivateRoute isAuthorizated={isAuthorizated}>
          <UpComing />
        </PrivateRoute>
      ),
      loader: upcoming,
    },
    {
      path: "/toprated",
      element: (
        <PrivateRoute isAuthorizated={isAuthorizated}>
          <TopRated />
        </PrivateRoute>
      ),
      loader: toprated,
    },
    {
      path: "/:movieId",
      element: (
        <PrivateRoute isAuthorizated={isAuthorizated}>
          <SingleMovie />
        </PrivateRoute>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
