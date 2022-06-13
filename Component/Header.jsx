import React from "react";
import img from "../image/Group 1.svg";
import css from '../Component/header.module.css'

export default function header() {
  return (
    <div className={css.main}>
      <div className="photo">
        <img src={img} alt="Картинка" />
      </div>
      <ul className={css.ul}>
        <li>
          <a href="#">Главная</a>
        </li>
        <li>
          <a href="#">О нас</a>
        </li>
        <li>
          <a href="#">Контакты</a>
        </li>
      </ul>

    </div>
  );
}
