import renderBackgroundColor from "../scripts/randomColor";
import css from "../styles/Statistic.module.css";
import { HexColor } from "../scripts/randomColor";

type stat = { id: string; label: string; percentage: number };

type StatisticsProps = {
  title?: string;
  stats: stat[];
};

const fontColorRaw = getComputedStyle(
  document.documentElement
).getPropertyValue("--font-color");
const hexColorRegExp = /^#[0-9A-Fa-f]{6}$/;
if (!hexColorRegExp.test(fontColorRaw)) {
  throw new Error(`Invalid font color: ${fontColorRaw}`);
}
const fontColor = fontColorRaw as HexColor;

const Statistics = ({ stats, title }: StatisticsProps) => {
  const listStats = stats.map((stat) => (
    <li
      className={css.item}
      style={{ backgroundColor: renderBackgroundColor(fontColor) }}
      key={stat.id}
    >
      <span className={css.label}> {stat.label} </span>
      <span className={css.percentage}> {stat.percentage} </span>
    </li>
  ));
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>{listStats}</ul>
    </section>
  );
};
export default Statistics;
