import type { NextPage } from "next";
import Head from "next/head";
import styled from "@emotion/styled";
import { mediaQueries } from "../styles/mediaQueries";
import { AboutMe } from "../components/AboutMe";
import { Connect } from "../components/Connect";
import { MyWork } from "../components/MyWork";
import {H1} from "../components/Typography";

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Stacie Taylor</title>
        <meta
          name="description"
          content="things about Stacie and the stuff she cares about"
        />
        <link rel="icon" href="/stars.png" />
      </Head>

      <Navigation>
        <Logo>S</Logo>
        <LinkWrapper>
          <NavLink href="#about-me">About me</NavLink>
          <NavLink>My work</NavLink>
          <NavLink>Connect</NavLink>
        </LinkWrapper>
      </Navigation>
      <HeroBlock>
        <PersonalImage
          src="/stacie_family.jpg"
          alt="stacie in a coffee shot in a hat"
        />
        <TextBlock>
          <H1>building a kinder tech.</H1>
          <p>
            I am a fierce advocate for early-career developers and work hard to
            dismantle the barriers experienced by people who have been
            systematically marginalized in tech — all while and leaving a
            notable trail of good vibes and kindness along the way.
          </p>
          <a href={"#about-me"}>
            <Button>About me</Button>
          </a>
        </TextBlock>
      </HeroBlock>
      <AboutMe />
      <MyWork />
      <Connect />
    </Container>
  );
};

const Container = styled.div`
  max-width: 2400px;
`;

const Navigation = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  padding: 20px 35px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;

const LinkWrapper = styled.div`
  justify-self: right;
`;

const NavLink = styled.a`
  text-transform: uppercase;
  padding: 20px;
`;

const Logo = styled.div`
  background-color: black;
  color: white;
  padding: 10px;
  font-family: Tiempos Headline, Georgia, serif;
  font-size: 48px;
  text-transform: uppercase;
  text-align: center;
  width: 75px;
  justify-self: left;
  height: 75px;
  border-radius: 50%;
`;

const HeroBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  position: relative;
`;

const PersonalImage = styled.img`
  width: 100%;
  filter: opacity(80%);
`;

const TextBlock = styled.div`
  padding: 25px;
`;

const Button = styled.div`
  text-transform: uppercase;
  color: white;
  background-color: black;
  padding: 16px;
  width: 200px;
  text-align: center;
`;

export default Home;
