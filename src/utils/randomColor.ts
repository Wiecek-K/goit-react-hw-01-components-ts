import calculateContrastRatio from "./calculateContrastRatio";
import type { THexColor } from "../types";

const getRandomHexColor = (): THexColor =>
  `#${Math.random().toString(16).substr(2, 6)}`;

const renderBackgroundColor = (fontColor: THexColor) => {
  let background = getRandomHexColor();
  while (calculateContrastRatio(fontColor, background) < 4.5) {
    background = getRandomHexColor();
  }
  return background;
};

export default renderBackgroundColor;
