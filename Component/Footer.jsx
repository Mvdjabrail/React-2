import React from "react";
import img from "../image/Group6.svg";
import css from "./footer.module.css";

export default function footer() {
  return (
    <>
      <div className={css.footer}>
        <div className={css.photo1}>
          <img src={img} alt="" />
        </div>
        <ul className={css.ul1}>
          <li>Партнерам</li>
          <li>Разработчикам</li>
          <li>Вакансии</li>
        </ul>
        <div>
          <p>ООО “интукод”, 2020г.</p>
        </div>
      </div>
    </>
  );
}
