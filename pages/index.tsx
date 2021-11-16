import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import styled from "@emotion/styled";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stacie Taylor</title>
        <meta
          name="description"
          content="things about Stacie and the stuff she cares about"
        />
        <link rel="icon" href="/stars.png" />
      </Head>
      <Navigation>
        <Logo src="/stars.png" alt="good vibes" />
        <Logo src="/hamburger.png" alt="good vibes" />

      </Navigation>
      <Intro>
        <h1 className={styles.title}>Hey! It's your pal, Stacie.</h1>
        <PersonalImage
          src="/stacie-hat.png"
          alt="stacie in a coffee shot in a hat"
        />
      </Intro>

      <footer className={styles.footer}>
        Powered by{" "}
        <span>
          <Icon src="/stars.png" alt="good vibes" />
          <Icon src="/heart.png" alt="love" />
          <Icon src="/dollar.png" alt="love" />
        </span>
      </footer>
    </div>
  );
};

const Navigation = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr max-content;
  height: 100px;
  padding: 20px;
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

const Intro = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin-bottom: 20px;
`;

const PersonalImage = styled.img`
  width: 100%;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 5px;
`;
export default Home;
