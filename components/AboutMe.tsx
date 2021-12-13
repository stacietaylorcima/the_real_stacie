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
            Ice cream jelly beans gummies shortbread jelly jelly-o apple pie.
            Cotton candy halvah chupa chups cake gummi bears. Toffee halvah
            sweet roll dessert jujubes jelly-o chocolate cake soufflé bonbon.
            Tootsie roll chupa chups bear claw jujubes donut cotton candy
            macaroon apple pie fruitcake. Sesame snaps cake macaroon shortbread
            powder sugar plum. Macaroon tiramisu danish biscuit ice cream.
            Brownie pudding biscuit chocolate jelly-o cheesecake bonbon candy
            canes. Chocolate cake marshmallow cupcake tiramisu powder croissant.
            Candy canes tart jelly-o donut croissant jelly-o brownie bonbon
            chupa chups.
          </Paragraph>
          <Paragraph>
            Pastry halvah lemon drops muffin jelly sesame snaps. Jujubes pudding
            icing dessert chocolate chupa chups marshmallow halvah. Cotton candy
            jelly macaroon pie danish toffee. Cheesecake jelly-o cotton candy
            topping liquorice cake ice cream macaroon oat cake. Bear claw bonbon
            chocolate bar halvah candy canes sweet roll sweet donut. Jelly chupa
            chups topping tiramisu croissant gummi bears icing halvah. Pastry
            croissant muffin fruitcake tiramisu sugar plum brownie cake. Candy
            canes cupcake macaroon shortbread halvah sweet roll pie bear claw
            danish. Sweet roll danish topping lollipop croissant wafer jelly
            beans sugar plum jujubes. Chocolate toffee donut cake cake macaroon
            oat cake fruitcake tiramisu. Powder marzipan carrot cake gingerbread
            halvah cheesecake gummies danish biscuit. Lemon drops icing cupcake
            chocolate topping. Topping donut carrot cake icing jelly beans ice
            cream oat cake gummies. Toffee macaroon pie chupa chups croissant
            dragée chocolate bar. Muffin donut oat cake chocolate wafer
            chocolate cake bonbon chocolate bar caramels.{" "}
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
  padding: 0 50px;
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
