import React from "react";
import FormationCard from "./FormationCard";

import { formation } from "../../utils/index";

import s from "./Formation.module.css";

const Formation = () => {
  return (
    <section className={s.section}>
      <h3 className={s.title}>FORMATION</h3>

      <div className={s.container}>
        {formation.map((e) => (
          <FormationCard data={e} />
        ))}
      </div>
    </section>
  );
};

export default Formation;
