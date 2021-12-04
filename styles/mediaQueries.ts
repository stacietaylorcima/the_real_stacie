export const breakpoints = {
  tablet: 768,
  desktop: 1230,
};

export const mediaQueryValues = {
  tablet: `(min-width: ${breakpoints.tablet}px)`,
  desktop: `(min-width: ${breakpoints.desktop}px)`,
};

export const mediaQueries = {
  tablet: `@media ${mediaQueryValues.tablet}`,
  desktop: `@media ${mediaQueryValues.desktop}`,
};
