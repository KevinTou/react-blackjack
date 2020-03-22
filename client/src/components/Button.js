import React from "react";

const Button = ({ title, action }) => {
  return (
    <>
      <button onClick={action}>{title}</button>
    </>
  );
};

export default Button;
