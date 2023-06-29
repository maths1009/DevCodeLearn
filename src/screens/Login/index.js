import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { homeRoute, registerRoute } from "../../utils/rootHTML";
import { loginValidation } from "../../api/login";
import { validEmail } from "../../utils/validation";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const navigate = useNavigate();

  function handleOnChangeEmail(event) {
    setEmail(event.target.value);
  }

  function handleOnChangePassword(event) {
    setPassword(event.target.value);
  }

  return (
    <div className="containerLogin">
      <h1>Se connecter</h1>
      <div className="containerForm">
        <Input
          type="email"
          placeholder="test@gmail.com"
          value={email}
          onChange={(ev) => handleOnChangeEmail(ev)}
          label={"Votre email"}
          className={`${!isEmailValid ? "error" : ""}`}
        />
        <Input
          type="password"
          placeholder="123456"
          value={password}
          onChange={(ev) => handleOnChangePassword(ev)}
          label={"Votre mot de passe"}
          className={`${!isPasswordValid ? "error" : ""}`}
        />
        <p>Mot de passe oublié ?</p>
        <Button
          onClick={async () => {
            const isValid = await loginValidation(email, password);
            setIsEmailValid(email !== "" && validEmail(email));
            setIsPasswordValid(password !== "");
            if (isValid) {
              onLogin();
              navigate(homeRoute);
            }
          }}
          children="Se connecter"
        />
        <p>
          Vous n'avez pas de compte ? <a href={registerRoute}>S'inscire</a>
        </p>
      </div>
    </div>
  );
}
