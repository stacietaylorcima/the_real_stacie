import styled from "@emotion/styled";
import { mediaQueries } from "../styles/mediaQueries";
import { H2 } from "./Typography";

export const Connect = () => {
  return (
    <Outer>
      <H2>lets connect.</H2>
      <SocialMediaIconGrid>
        <a href="https://twitter.com/the_real_Stacie">
          <img src="twitter.png" alt="twitter" />
        </a>
        <a href="https://www.linkedin.com/in/therealstacie/">
          <img src="linkedin.png" alt="linkedin" />
        </a>
        <a href="https://www.instagram.com/the_real_stacie/">
          <img src="instagram.png" alt="instagram" />
        </a>
      </SocialMediaIconGrid>
    </Outer>
  );
};

const Outer = styled.div`
  background-color: #6d7c867d;
  padding: 0 50px 50px 50px;
`;

const SocialMediaIconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
`;
