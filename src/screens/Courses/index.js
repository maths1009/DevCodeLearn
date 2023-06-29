import React, { useState } from "react";

import { validUser } from "../../__mocks__/login";
import { getPourcent } from "../../utils/snippets";

import Block from "../../components/Block";
import Header from "../../components/Header";

export default function Courses() {
  const [typeSearch, setTypeSearch] = useState("all");
  const [courses, setCourses] = useState(validUser.courses);

  function sortCourses(type) {
    const newCourses =
      type === "all"
        ? validUser.courses
        : validUser.courses.filter((course) => course.type === type);
    setCourses(newCourses);
  }

  const { avatar } = validUser;

  return (
    <div className="coursesContainer">
      <Header avatar={avatar} titlePage="Cours" />
      <div className="containerSearchBar">
        <img src="/img/icone/search.png" alt="search" />
        <input type="text" placeholder="Trouvez votre cours" />
        <img src="/img/icone/param.png" alt="search" />
      </div>
      <div className="containerCourses">
        <h2>Choisissez votre cours</h2>
        <div className="containerTag">
          <div
            className={`${typeSearch === "all" ? "active" : ""}`}
            onClick={() => {
              setTypeSearch("all");
              sortCourses("all");
            }}
          >
            Tout
          </div>
          <div
            className={`${typeSearch === "famous" ? "active" : ""}`}
            onClick={() => {
              setTypeSearch("famous");
              sortCourses("famous");
            }}
          >
            Populaires
          </div>
          <div
            className={`${typeSearch === "new" ? "active" : ""}`}
            onClick={() => {
              setTypeSearch("new");
              sortCourses("new");
            }}
          >
            Nouveaux
          </div>
        </div>
        <div className="containerCoursesList">
          {courses.length !== 0 &&
            courses.map((course) => {
              const { name, step, finalStep, time } = course;
              const pourcent = getPourcent(step, finalStep);
              return (
                <Block
                  children={
                    <div className="courseContainer">
                      <div className="img">
                        <img src={`/img/icone/game.png`} alt="icone jeux" />
                      </div>
                      <div className="info">
                        <h3>{name}</h3>
                        <div className="pourcentTime">
                          <span>{pourcent}%</span>
                          <span>{time} heures</span>
                        </div>
                      </div>
                    </div>
                  }
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
