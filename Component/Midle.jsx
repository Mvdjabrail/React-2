import React from "react";
import img from "../image/0.svg";
import css from '../Component/midle.module.css'

export default function midle() {
  return (
    <>
      <div className={css.zero}>
        <img src={img} alt="" />
      </div>
      <div className={css.btn}>
        <button className={css.btn1}>Увеличить</button>
        <button className={css.btn2}>Уменьшить</button>
        <button className={css.btn3}>Сбросить</button>
      </div>
    </>
  );
}
