import calculateContrastRatio from "./calculateContrastRatio";

export type HexColor = `#${string}`;
const getRandomHexColor = (): HexColor =>
  `#${Math.random().toString(16).substr(2, 6)}`;

const renderBackgroundColor = (fontColor: HexColor) => {
  let background = getRandomHexColor();
  while (calculateContrastRatio(fontColor, background) < 4.5) {
    background = getRandomHexColor();
  }
  return background;
};

export default renderBackgroundColor;
