export const SPLIT_SLIDER_COUNT = 7;

const breakpoints = {
  mobileS: "320px", // Mobile screen (extra small)
  mobileM: "375px", // Mobile screen (small)
  mobileL: "425px", // Mobile screen (medium)
  tablet: "768px", // Tablets
  laptop: "1024px", // Laptops
  desktop: "1440px", // Desktop/monitors
  tv: "1920px", // TVs
};

export const device = {
  xs: `(max-width: ${breakpoints.mobileS})`,
  sm: `(max-width: ${breakpoints.mobileM})`,
  md: `(max-width: ${breakpoints.mobileL})`,
  tablet: `(min-width: ${breakpoints.mobileM}) and (max-width: ${breakpoints.tablet})`,
  laptop: `(min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.laptop})`,
  desktop: `(min-width: ${breakpoints.laptop}) and (max-width: ${breakpoints.desktop})`,
  xl: `(min-width: ${breakpoints.desktop}) and (max-width: ${breakpoints.tv})`,
  xxl: `(min-width: ${breakpoints.tv})`,
};
