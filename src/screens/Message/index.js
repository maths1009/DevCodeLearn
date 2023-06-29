import React, { useState, useEffect } from "react";

import { validUser } from "../../__mocks__/login";
import { messages, notificatons } from "../../__mocks__/users";

import Header from "../../components/Header";
import Block from "../../components/Block";

export default function Message() {
  const [messageType, setMessageType] = useState("notification");
  const [hasNewMessage, setHasNewMessage] = useState(false);

  useEffect(() => {
    const hasNewMessage = messages.some((message) => message.new);
    setHasNewMessage(hasNewMessage);
  }, []);

  const { avatar } = validUser;
  return (
    <div className="coursesContainer">
      <Header avatar={avatar} titlePage="Messages" />
      <div className="titleChoice">
        <p
          className={`${messageType === "notification" ? "active" : ""}`}
          onClick={() => {
            setMessageType("notification");
          }}
        >
          Notification
        </p>
        <p
          className={`${messageType === "message" ? "active" : ""} ${
            hasNewMessage ? "hasNewMessage" : ""
          }`}
          onClick={() => {
            setMessageType("message");
          }}
        >
          Message
        </p>
      </div>
      <div className="container">
        {messageType === "notification"
          ? notificatons.map((notification, index) => {
              const { name, message, date, online, avatar } = notification;
              return (
                <Block
                  children={
                    <div className="notification">
                      <div className="headerNotifications">
                        <div className="avatarTitle">
                          <div className="avatar"></div>
                          <div className="title">
                            <p className="name">{name}</p>
                            <p className={`status ${online ? "online" : ""}`}>
                              {online ? "En ligne" : "Hors ligne"}
                            </p>
                          </div>
                        </div>
                        <p>{date}</p>
                      </div>
                      <p>{message}</p>
                    </div>
                  }
                />
              );
            })
          : messages.map((message, index) => {
              const { name, date } = message;
              return (
                <Block
                  children={
                    <div className="containerMessage">
                      <div className="icone">
                        <img src="/img/icone/message.png" alt="icone message" />
                      </div>
                      <div className="titleMessage">
                        <p className="name">{name}</p>
                        <div className="timeMessage">
                          <img src="/img/icone/clock.png" alt="icone horloge" />
                          <p>{date}</p>
                        </div>
                      </div>
                    </div>
                  }
                />
              );
            })}
      </div>
    </div>
  );
}
