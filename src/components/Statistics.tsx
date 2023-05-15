import { FC } from "react";

import renderBackgroundColor from "../utils/randomColor";

import type { THexColor, TStat } from "../types";
import css from "./Statistic.module.css";

type TProps = {
  title?: string;
  stats: TStat[];
};

const fontColorRaw = getComputedStyle(
  document.documentElement
).getPropertyValue("--font-color");
const hexColorRegExp = /^#[0-9A-Fa-f]{6}$/;

if (!hexColorRegExp.test(fontColorRaw)) {
  throw new Error(`Invalid font color: ${fontColorRaw}`);
}
const fontColor = fontColorRaw as THexColor;

export const Statistics: FC<TProps> = ({ stats, title }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map((stat) => (
          <li
            className={css.item}
            style={{ backgroundColor: renderBackgroundColor(fontColor) }}
            key={stat.id}
          >
            <span className={css.label}> {stat.label} </span>
            <span className={css.percentage}> {stat.percentage} </span>
          </li>
        ))}
      </ul>
    </section>
  );
};
