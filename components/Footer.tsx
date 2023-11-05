import styled from "@emotion/styled";
import { mediaQueries } from "../styles/mediaQueries";
import { H2, Paragraph } from "./Typography";

export const Footer = () => {
  return (
    <Outer>
      <ContentContainer>
        <H2 id="contact-footer" color={'#FAF9F6'} >get in touch.</H2>
        <Paragraph color={'#FAF9F6'}>
          I am absolutely driven by human connection and always eager to
          meet a new friend. Hit me up if you ever want to chat about
          leadership, diversity and inclusion, engineering, parenting,
          wine & cheese, or really anything femme.
        </Paragraph>
      </ContentContainer>
      <SocialMediaContainer>
          <Quote>take care of each other, okay.</Quote>{" "}
          <SocialMediaIconGrid>
            <a href="https://twitter.com/the_real_Stacie">
              <SocialMediaIcon src="twitter.png" alt="twitter" height={50} />
            </a>
            <a href="https://www.linkedin.com/in/therealstacie/">
              <SocialMediaIcon src="linkedin.png" alt="linkedin" height={50} />
            </a>
            <a href="https://www.instagram.com/the_real_stacie/">
              <SocialMediaIcon src="instagram.png" alt="instagram" height={50} />
            </a>
          </SocialMediaIconGrid>
        </SocialMediaContainer>
    </Outer>
  );
};

const Outer = styled.div`
  background-color: #000000b5;
  display: grid;
  place-items: center;
  ${mediaQueries.desktop}{
    grid-template-columns: 1fr 1fr;
  }
`;

const ContentContainer = styled.div`
  display: grid;
  padding: 20px;
  ${mediaQueries.desktop} {
    max-width: 1200px;
    width: 100%;
  }
`;

const SocialMediaContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  place-content: center;
  border-style: solid;
  border-color: #FAF9F6;
  width: 80%;
`;

const Quote = styled.small`
  color: white;
  font-size: 16px;
  font-family: Tiempos Headline, Georgia, serif;
  text-transform: uppercase;
`;

const SocialMediaIconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: max-content;
  grid-column-gap: 20px;
  padding-top: 7px;
  ${mediaQueries.desktop} {
    justify-self: self-end;
    grid-column-end: none;
  }
`;

const SocialMediaIcon = styled.img`
  filter: invert(1);
  height: 35px;
`;
