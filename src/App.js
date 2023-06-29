import React, { useState } from "react";

import "./styles/App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  courseRoute,
  homeRoute,
  loginRoute,
  messageRoute,
  registerRoute,
} from "./utils/rootHTML";

import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Courses from "./screens/Courses";

import NavigationBar from "./components/NavigationBar";
import Message from "./screens/Message";

function App() {
  const [isLoggin, setIsLoggin] = useState(localStorage.getItem("token"));

  const homeElement = <Home />;
  const loginElement = (
    <Login
      onLogin={() => {
        setIsLoggin(true);
      }}
    />
  );

  const router = [
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
    {
      path: courseRoute,
      element: <Courses />,
    },
    {
      path: messageRoute,
      element: <Message />,
    },
  ];

  const unloggedRouter = [
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
  ];

  return (
    <div className="App">
      <div className="containerApp">
        <BrowserRouter>
          {isLoggin ? (
            <>
              <NavigationBar />
              <Routes>
                {router.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Routes>
            </>
          ) : (
            <Routes>
              {unloggedRouter.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Routes>
          )}
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
