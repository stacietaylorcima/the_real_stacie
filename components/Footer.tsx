import styled from "@emotion/styled";

export const Footer = () => {
  return (
    <Outer>
      <ContentContainer>
        <QuoteContainer>
          <Quote>take care of each other, okay.</Quote>{" "}
          <HeartIcon src="heart.png" alt="heart" height={50} />
        </QuoteContainer>
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
      </ContentContainer>
    </Outer>
  );
};

const Outer = styled.div`
  background-color: #000000b5;
  display: grid;
  place-items: center;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 100%;
  padding: 10px 20px;
`;

const QuoteContainer = styled.div`
  display: grid;
  grid-template-columns: max-content auto;
  align-items: center;
  grid-gap: 5px;
`;

const Quote = styled.small`
  color: white;
  font-size: 16px;
  font-family: Tiempos Headline, Georgia, serif;
  text-transform: uppercase;
`;

const HeartIcon = styled.img`
  filter: invert(1);
  height: 20px;
`;

const SocialMediaIconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-self: self-end;
  grid-column-end: none;
  width: max-content;
  grid-column-gap: 20px;
  padding-top: 7px;
`;

const SocialMediaIcon = styled.img`
  filter: invert(1);
  height: 35px;
`;
