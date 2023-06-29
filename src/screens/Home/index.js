import React, { useState } from "react";
import Block from "../../components/Block";
import ProgressCircle from "../../components/ProgressCircle";
import ProgressBar from "../../components/ProgressBar";
import { validUser } from "../../__mocks__/login";
import { getPourcent } from "../../utils/snippets";

export default function Home() {
  const [showMore, setShowMore] = useState(false);

  const { life, avatar, name, time, courses, maxLife } = validUser;

  return (
    <div className="homeContainer">
      <header>
        <div className="title">
          <h2>Bonjour, Mathis</h2>
          <p>Commencons à appendre</p>
        </div>
        <img src={`/img/avatar/${avatar}`} alt="avatar" />
      </header>
      <div className="containerLearn">
        <Block
          style={{ transform: "translate(0, -50%)" }}
          children={
            <div className="learnToday">
              <div className="title">
                <p>Appris Aujourd'hui</p>
                <p>Mes cours</p>
              </div>
              <div className="containerTimeLearn">
                <p>
                  <span>{time.dayMe}min</span>/{time.dayTo}min
                </p>
                <ProgressBar width={getPourcent(time.dayMe, time.dayTo)} />
              </div>
            </div>
          }
        />

        <div
          className="containerCourses"
          style={{ transform: "translate(0, -50%)" }}
        >
          <h2>Apprentissage en cours</h2>
          <Block
            children={
              <>
                <div
                  className="courses"
                  style={{
                    height: `${showMore ? "100%" : "3rem"}`,
                    overflowY: "hidden",
                  }}
                >
                  {courses.map((course) => {
                    const { name, description, step, finalStep } = course;
                    return (
                      <div className="course">
                        <div className="titleCourse">
                          <ProgressCircle
                            strokeWidth={16}
                            percentage={getPourcent(step, finalStep)}
                            width={25}
                            height={25}
                          />
                          <p>{name}</p>
                        </div>
                        <div className="scoreCourse">
                          <p>
                            <span>{step}</span>/{finalStep}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <p className="showMore" onClick={() => setShowMore(!showMore)}>
                  Voir plus
                </p>
              </>
            }
          />
        </div>
        <Block
          style={{ transform: "translate(0, -50%)" }}
          children={
            <div className="lifeContainer">
              <h2>Nombre de vie</h2>
              <div className="life">
                <p style={{ transform: "translate(0, -10px)" }}>{life}</p>
                <p>/</p>
                <p style={{ transform: "translate(0, 10px)" }}>{maxLife}</p>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
}
