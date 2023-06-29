import React from "react";

export default function Block({ children, className, style }) {
  return (
    <div className={`block ${className}`} style={style}>
      {children}
    </div>
  );
}
