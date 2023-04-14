import React from "react";

import s from "./FormationCard.module.css";
import { images } from "../../utils/index";

const FormationCard = ({ data }) => {
  return (
    <div className={s.card}>
      <img src={data.logo} alt={data.title} className={s.image} />

      <div className={s.content}>
        <h1>{data.title}</h1>

        <h2>
          Site:{" "}
          <a href={data.webLink} target="_blank" rel="noreferrer">
            <span className={s.site}>
              {data.site}{" "}
              <img src={images.externalLink} className={s.externalLogo} />{" "}
            </span>
          </a>
        </h2>

        <h2>
          Type: <span>{data.type}</span>
        </h2>
        <h2>
          State: <span>{data.state}</span>
        </h2>
      </div>

      <div className={s.divBtn}>
        {data.diplomaLink !== "-" ? (
          <a href={data.diplomaLink} target="_blank" rel="noreferrer">
            <button className={s.button}>VIEW_DIPLOMA</button>
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default FormationCard;
