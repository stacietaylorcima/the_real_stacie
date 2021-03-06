import { H1 } from "./Typography";
import { fireTheConfetti } from "../utilities/confetti";
import styled from "@emotion/styled";
import { mediaQueries } from "../styles/mediaQueries";

export const Hero = () => {
  return (
    <Outer>
      <ConfettiContainer id="confettiContainer" />
      <PersonalImage
        src="https://cdn.zappy.app/a90cb33751a19011558c401ab0a8c4cb.png"
        alt="Stacie, Mila and Benny on a bench"
      />
      <TextBlock>
        <H1>building a kinder tech.</H1>
        <p>
          I am a fierce advocate for early-career developers and work hard to
          dismantle the barriers experienced by people who have been
          systematically marginalized in tech — all while and leaving a notable
          trail of good vibes and kindness along the way.
        </p>
        <Button onClick={fireTheConfetti}>Good vibes only</Button>
      </TextBlock>
    </Outer>
  );
};

const Outer = styled.div`
  position: relative;
  ${mediaQueries.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

const PersonalImage = styled.img`
  width: 100%;
  filter: opacity(80%);
  height: auto;
`;

const TextBlock = styled.div`
  padding: 50px;
  ${mediaQueries.tablet} {
    padding: 50px 50px 20px 50px;
    max-width: 1050px;
  }
`;

const Button = styled.div`
  text-transform: uppercase;
  color: white;
  background-color: #000000b5;
  padding: 16px;
  width: 200px;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

const ConfettiContainer = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  canvas {
    width: 100%;
  }
`;
