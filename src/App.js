import "./styles/App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { homeRoute, loginRoute, registerRoute } from "./utils/rootHTML";

import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";

import NavigationBar from "./components/NavigationBar/indes";

function App() {
  const isLoggin = localStorage.getItem("token");

  const homeElement = <Home />;
  const loginElement = <Login />;

  const router = createBrowserRouter([
    {
      path: "/",
      element: homeElement,
    },
    {
      path: homeRoute,
      element: homeElement,
    },
    {
      path: "*",
      element: homeElement,
    },
  ]);

  const unloggedRouter = createBrowserRouter([
    {
      path: "/",
      element: loginElement,
    },
    {
      path: loginRoute,
      element: loginElement,
    },
    {
      path: registerRoute,
      element: <Register />,
    },
    {
      path: "*",
      element: loginElement,
    },
  ]);

  return (
    <div className="App">
      <div className="containerApp">
        <RouterProvider router={isLoggin ? router : unloggedRouter} />
      </div>
      {isLoggin && <NavigationBar />}
    </div>
  );
}

export default App;
