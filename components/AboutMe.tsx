import styled from "@emotion/styled";
import { mediaQueries } from "../styles/mediaQueries";
import { H2, Paragraph } from "./Typography";

export const AboutMe = () => {
  return (
    <Outer>
      <ContentContainer>
        <Grid>
          <ImageGrid>
            <ImageColumn>
              <Image src="elopement.jpg" alt="Stacie elopes in Edinburgh" />
              <Image src="sf.jpg" alt="Golden Gate Bridge" />
              <Image src="big-charcuterie.jpg" alt="Charcuterie board" />
              <Image src="cima-kids.jpeg" alt="Cima kids" />
            </ImageColumn>
            <ImageColumn>
              <Image src="stacie-silly.jpg" alt="Stacie smiling" />
              <Image src="coffee-with-david.jpg" alt="Two lattes" />
              <Image
                src="mum-in-scotland.jpg"
                alt="Stacie, David, and Mum toasting in Edinburgh"
              />
              <Image src="point-reyes.jpg" alt="Point Reyes California" />
            </ImageColumn>
          </ImageGrid>
          <AboutBlock>
            <H2 id="about-me">about me.</H2>
            <TextContainer>
              <Paragraph>
                Hiya, friend! I&#39;m Stacie. I&#39;m an engineer at Zapier, a
                nobody on Twitter, and the mom of two energetic kids who ask a
                lot of questions and have taught me a lot about empathy,
                patience, and unconditional love. I grew up in the midwest but
                am firmly rooted in California (physically and otherwise.)
              </Paragraph>
              <Paragraph>
                I know what working in a tech is like, and not just for
                engineers — I&#39;ve spent time in many corners of tech
                including support, product management, leadership, and more.
                These experiences made me deeply passionate about and committed
                to creating a more diverse and inclusive tech space for
                everyone.
              </Paragraph>
              <Paragraph>
                That&#39;s why I co-founded{" "}
                <a href="https://the-collab-lab.codes/">The Collab Lab</a>, a
                501(c)(3) nonprofit that helps recent bootcamp grads and
                self-taught developers learn the collaboration side of software
                development. Participants work on small teams to build a
                fully-functioning app in eight weeks, working alongside tech
                professionals and engineers who act as mentors. Since the
                inception, we&#39;ve onboarded more than 140 developers, setting
                them up for success and supporting them in refining their
                collaboration skills on software development teams.
              </Paragraph>
              <Paragraph>
                I thrive in spaces where there is a lot of trust, and I work
                hard to build psychologically safe spaces that allow for high
                levels of trust in every space I venture into. I love
                contributing to the greater vision of organizations I work with,
                and am passionate about creating processes that help teams
                collaborate to achieve their shared vision.
              </Paragraph>
              <Paragraph>
                I am absolutely driven by human connection and always eager to
                meet a new friend. Hit me up if you ever want to chat about
                leadership, diversity and inclusion, engineering, parenting,
                wine & cheese, or really anything femme.
              </Paragraph>
              <Paragraph>- Your pal, Stacie</Paragraph>
            </TextContainer>
          </AboutBlock>
        </Grid>
      </ContentContainer>
    </Outer>
  );
};

const Outer = styled.div`
  height: 100%;
  background-color: #dccad7;
  display: grid;
  grid-template-columns: 1fr;
  padding: 50px;
`;

const ContentContainer = styled.div`
  display: grid;
  place-self: center;
  max-width: 1200px;
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 50px;
  max-width: 1200px;
  justify-self: center;
  margin-top: 20px;
  grid-template-areas: "image-grid" "about-block";
  ${mediaQueries.desktop} {
    margin-top: 40px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: "about-block image-grid";
  }
`;

const AboutBlock = styled.div`
  grid-area: about-block;
`;

const TextContainer = styled.div`
  padding-top: 20px;
  ${mediaQueries.desktop} {
    padding-top: 40px;
  }
`;

const ImageGrid = styled.div`
  grid-area: image-grid;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;

const ImageColumn = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-auto-rows: min-content;
`;

const Image = styled.img`
  width: 100%;
`;
