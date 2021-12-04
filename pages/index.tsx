import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import styled from "@emotion/styled";
import { mediaQueries } from "../styles/mediaQueries";

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
          <NavLink>About</NavLink>
          <NavLink>My work</NavLink>
          <NavLink>Other</NavLink>
        </LinkWrapper>
      </Navigation>
      <Intro>
        <PersonalImage
          src="/stacie_family.jpg"
          alt="stacie in a coffee shot in a hat"
        />
        <H1>building a kinder tech.</H1>
      </Intro>
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
  padding: 20px 60px;
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
  font-family: Avenir, sans-serif;
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

const H1 = styled.h1`
  font-size: 50px;
  font-family: Tiempos Headline, Georgia, serif;
  padding: 50px;
  ${mediaQueries.tablet} {
    font-size: 100px;
  }

  ${mediaQueries.desktop} {
    font-size: 100px;
  }
`;
const Intro = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
`;

const PersonalImage = styled.img`
  width: 100%;
  filter: opacity(70%);
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 5px;
`;
export default Home;
