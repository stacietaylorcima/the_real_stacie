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
          <LinkWrapper>
            <NavLink href="#about-me">Bio</NavLink>
            <NavLink href="#about-me">Work</NavLink>
            <NavLink href="#about-me">Contact</NavLink>
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

const Outer = styled.div`
  background-color: #FAF9F6;
`;

const Navigation = styled.div`
  background-color: #FAF9F6;
  align-items: center;
  text-align: center;
  width: 100%; 
  position: fixed; 
  z-index: 1;
`;

const LinkWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
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

export default Home;
