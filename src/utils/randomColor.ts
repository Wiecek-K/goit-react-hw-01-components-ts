import { calculateContrastRatio } from "./calculateContrastRatio";

const getRandomHexColor = (): string =>
  `#${Math.random().toString(16).substr(2, 6)}`;

export const renderBackgroundColor = (fontColor: string) => {
  let background = getRandomHexColor();
  while (calculateContrastRatio(fontColor, background) < 4.5) {
    background = getRandomHexColor();
  }
  return background;
};
