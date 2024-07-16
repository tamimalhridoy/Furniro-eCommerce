import React from "react";
import { Link } from "react-router-dom";

const Button = ({title, path}) => {
  return <Link className="font-primary text-base font-bold text-white bg-brand py-6 px-16 rounded-lg" to={path}>{title}</Link>;
};

export default Button;
