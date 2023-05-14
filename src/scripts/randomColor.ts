export type HexColor = `#${string}`;

const getRandomHexColor = (): HexColor =>
  `#${Math.random().toString(16).substr(2, 6)}`;

const hexToRGB = (colorValue: HexColor): number[] => {
  const red = parseInt(colorValue.substring(1, 3), 16);
  const green = parseInt(colorValue.substring(3, 5), 16);
  const blue = parseInt(colorValue.substring(5, 7), 16);
  return [red, green, blue];
};

let getRelativeLuminance = (color: number[]): number => {
  const sRGB = color.map((val) => {
    const s = val / 255;
    return s < 0.03928 ? s / 12 / 92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * sRGB[0] + 0.7152 * sRGB[1] + 0.0722 * sRGB[2];
};

let calculateContrastRatio = (color1: HexColor, color2: HexColor) => {
  const color1rgb = hexToRGB(color1);
  const color2rgb = hexToRGB(color2);
  const luminance1 = getRelativeLuminance(color1rgb);
  const luminance2 = getRelativeLuminance(color2rgb);
  const light = Math.max(luminance1, luminance2);
  const dark = Math.min(luminance1, luminance2);
  const contrast = (light + 0.05) / (dark + 0.05);
  return contrast;
};

const renderBackgroundColor = (fontColor: HexColor) => {
  let background = getRandomHexColor();

  while (calculateContrastRatio(fontColor, background) < 4.5) {
    background = getRandomHexColor();
  }
  console.log(background);
  return background;
};
export default renderBackgroundColor;
