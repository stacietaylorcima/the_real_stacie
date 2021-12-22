import styled from "@emotion/styled";
import { mediaQueries } from "../styles/mediaQueries";

export const H1 = styled.h1`
  font-size: 35px;
  color: #000000b5;
  font-family: Tiempos Headline, Georgia, serif;
  ${mediaQueries.tablet} {
    font-size: 40px;
  }
  ${mediaQueries.desktop} {
    font-size: 80px;
  }
`;

export const H2 = styled.h2`
  color: #000000b5;
  font-size: 35px;
  font-family: Tiempos Headline, Georgia, serif;
  ${mediaQueries.tablet} {
    font-size: 50px;
  }
  ${mediaQueries.desktop} {
    font-size: 80px;
  }
`;

export const Paragraph = styled.p`
  margin: 0 0 16px 0;
`;
