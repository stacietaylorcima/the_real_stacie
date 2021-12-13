import styled from "@emotion/styled";
import { mediaQueries } from "../styles/mediaQueries";

export const H1 = styled.h1`
  font-size: 50px;
  font-family: Tiempos Headline, Georgia, serif;
  ${mediaQueries.tablet} {
    font-size: 100px;
  }

  ${mediaQueries.desktop} {
    font-size: 100px;
  }
`;

export const H2 = styled.h2`
  font-size: 75px;
  color: white;
  font-family: Tiempos Headline, Georgia, serif;
  padding: 50px 0;
  ${mediaQueries.tablet} {
    font-size: 100px;
  }

  ${mediaQueries.desktop} {
    font-size: 100px;
  }
`;
