import React from "react";
import s from "./TechCard.module.css";

const TechCard = ({ data }) => {
  return (
    <div className={s.card}>
      <img src={data.image} alt={data.name} />
      <h2>{data.name}</h2>
    </div>
  );
};

export default TechCard;
