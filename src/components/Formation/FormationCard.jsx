import React from "react";

import s from "./FormationCard.module.css";
import { images } from "../../utils/index";

const FormationCard = ({ data }) => {
  return (
    <div className={data.diplomaLink ? s.card1 : s.card2}>
      <div className={s.divImg}>
        <img src={data.logo} alt={data.title} className={s.image} />
      </div>

      <div className={s.content}>
        <h1 className={s.title}>{data.title}</h1>

        <h2>
          Site:{" "}
          {data.webLink ? (
            <a href={data.webLink} target="_blank" rel="noreferrer">
              <span className={s.siteLink}>
                {data.site}{" "}
                <img
                  src={images.externalLink}
                  className={s.externalLogo}
                  alt="externalLink"
                />{" "}
              </span>
            </a>
          ) : (
            <span>
            {data.site}{" "}
          </span>
          )}
        </h2>

        <h2>
          Type: <span>{data.type}</span>
        </h2>

        <h2>
          Status: <span>{data.state}</span>
        </h2>
      </div>

      {data.diplomaLink ? (
        <div className={s.divBtn}>
          <a href={data.diplomaLink} target="_blank" rel="noreferrer">
            <button className={s.button}>VIEW_DIPLOMA</button>
          </a>
        </div>
      ) : null}
    </div>
  );
};

export default FormationCard;
