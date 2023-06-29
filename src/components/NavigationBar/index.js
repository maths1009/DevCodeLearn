import React from "react";
import { NavLink } from "react-router-dom";
import {
  accountRoute,
  courseRoute,
  homeRoute,
  messageRoute,
} from "../../utils/rootHTML";

function NavigationBar() {
  function renderOneItem(path, name, image) {
    return (
      <NavLink to={path} className="navLink" activeClassName="active">
        <img src={`/img/icone/${image}`} alt={name} />
        {name}
      </NavLink>
    );
  }

  const items = [
    {
      path: homeRoute,
      name: "Accueil",
      image: "home.svg",
    },
    {
      path: courseRoute,
      name: "Cours",
      image: "course.svg",
    },
    {
      path: messageRoute,
      name: "Messages",
      image: "message.svg",
    },
    {
      path: accountRoute,
      name: "Compte",
      image: "compte.svg",
    },
  ];

  return (
    <div className="containerNavigationBar">
      {items.map((item) => {
        return renderOneItem(item.path, item.name, item.image);
      })}
    </div>
  );
}

export default NavigationBar;
