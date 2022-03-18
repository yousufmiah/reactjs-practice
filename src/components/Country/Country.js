import React from "react";
import "./Country.css";

const Country = (props) => {
  const { name, area, population, flags } = props.country;
  return (
    <div className="card">
      <h1>{name.common}</h1>
      <h3>Area: {area}</h3>
      <p>{population}</p>
      <img src={flags.png} alt="" />
    </div>
  );
};

export default Country;
