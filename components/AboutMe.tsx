import styled from "@emotion/styled";
import { mediaQueries } from "../styles/mediaQueries";
import { H2 } from "./Typography";

export const AboutMe = () => {
  return (
    <Outer>
      <H2 id="about-me">more about me.</H2>
      <Grid>
        <div>
          <Paragraph>
            Hiya, friend! I&#39;m Stacie. I&#39;m an engineer at Zapier, a
            nobody on Twitter, and the mom of two energetic kids who ask a lot
            of questions and have taught me a lot about empathy, patience, and
            unconditional love. I grew up in the midwest but am firmly rooted in
            California (physically and otherwise.)
          </Paragraph>
          <Paragraph>
            I know what working in a tech is like, and not just for engineers —
            I&#39;ve spent time in many corners of tech including support,
            product management, leadership, and more. These experiences made me
            deeply passionate about and committed to creating a more diverse and
            inclusive tech space for everyone.
          </Paragraph>
          <Paragraph>
            That&#39;s why I co-founded{" "}
            <a href="https://the-collab-lab.codes/">The Collab Lab</a>, a
            501(c)(3) nonprofit that helps recent bootcamp grads and self-taught
            developers learn the collaboration side of software development.
            Participants work on small teams to build a fully-functioning app in
            eight weeks, working alongside tech professionals and engineers who
            act as mentors. Since the inception, we&#39;ve onboarded more than
            140 developers, setting them up for success and supporting them in
            refining their collaboration skills on software development teams.
          </Paragraph>
          <Paragraph>
            I thrive in spaces where there is a lot of trust, and I work hard to
            build psychologically safe spaces that allow for high levels of
            trust in every space I venture into. I love contributing to the
            greater vision of organizations I work with, and am passionate about
            creating processes that help teams collaborate to achieve their
            shared vision.
          </Paragraph>
        </div>
        <ImageGrid>
          <ImageColumn>
            <Image src={"elopement.jpg"} />
            <Image src={"sf.jpg"} />
            <Image src={"big-charcuterie.jpg"} />
            <Image src={"cima-kids.jpg"} />
          </ImageColumn>
          <ImageColumn>
            <Image src={"stacie-silly.jpg"} />
            <Image src={"coffee-with-david.jpg"} />
            <Image src={"mum-in-scotland.jpg"} />
            <Image src={"point-reyes.jpg"} />
          </ImageColumn>
        </ImageGrid>
      </Grid>
    </Outer>
  );
};

const Outer = styled.div`
  height: 100%;
  background-color: #dccad7;
  display: grid;
  grid-template-columns: 1fr;
  padding: 0 50px 50px 50px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
  max-width: 1200px;
  justify-self: center;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;

const ImageColumn = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-auto-rows: min-content;
`;

const Paragraph = styled.p`
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 100%;
`;
