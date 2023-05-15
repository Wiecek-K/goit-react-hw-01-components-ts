export const hexToRGB = (colorValue: string): number[] => {
  const red = parseInt(colorValue.substring(1, 3), 16);
  const green = parseInt(colorValue.substring(3, 5), 16);
  const blue = parseInt(colorValue.substring(5, 7), 16);
  return [red, green, blue];
};
