import type { NextPage } from "next";
import Head from "next/head";
import styled from "@emotion/styled";
import { AboutMe } from "../components/AboutMe";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { mediaQueries } from "../styles/mediaQueries";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Stacie Taylor</title>
        <meta
          name="description"
          content="Here you will find bits about Stacie and the things she cares about."
        />
        <link rel="icon" href="/stars.png" />
      </Head>
      <Outer>
        <Navigation>
          <Logo>S</Logo>
          <LinkWrapper>
            <NavLink href="#about-me">About me</NavLink>
            <NavLink href="https://the-collab-lab.codes/">Collab Lab</NavLink>
          </LinkWrapper>
        </Navigation>
        <Hero />
        <AboutMe />
        <Footer />
      </Outer>
    </>
  );
};

const Outer = styled.div``;

const Navigation = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: max-content auto;
  place-items: center;
  padding: 20px 35px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;

const LinkWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-self: right;
`;

const NavLink = styled.a`
  font-size: 12px;
  text-transform: uppercase;
  padding: 20px;
  ${mediaQueries.tablet} {
    font-size: 20px;
  }
`;

const Logo = styled.div`
  background-color: #00000080;
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

export default Home;
