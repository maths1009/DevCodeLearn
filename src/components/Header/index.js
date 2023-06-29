import React from "react";

export default function Header({ avatar, titlePage }) {
  return (
    <header className="header">
      <div className="title">
        <h2>{titlePage}</h2>
      </div>
      <img src={`/img/avatar/${avatar}`} alt="avatar" />
    </header>
  );
}
