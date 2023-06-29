import React, { useState } from "react";

export default function Input({
  type,
  placeholder,
  value,
  onChange,
  className,
  name,
  label,
}) {
  const [lockPassword, setLockPassword] = useState(true);

  return (
    <div className="containerInput">
      <label>{label}</label>
      <div className={`input ${className}`}>
        <input
          type={
            type === "password" ? (lockPassword ? "password" : "text") : type
          }
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
        />
        {type === "password" && (
          <img
            className="lockPassword"
            src={`/img/icone/${
              lockPassword ? "lockPassword" : "unLockPassword"
            }.png`}
            alt="eye"
            onClick={() => setLockPassword(!lockPassword)}
          />
        )}
      </div>
    </div>
  );
}
