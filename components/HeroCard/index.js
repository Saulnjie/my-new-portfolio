import styled from "styled-components";

const LandingCardMain = styled.div`
  background: var(--color-white);
  height: 700px;
  width: 100%;
  margin-top: var(--size-xl);
`;

const StyledHeroCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: yellow;
  height: 92%;
  width: 100%;
  /* margin-top: var(--size-xl); */
`;

const StyledHeroCardLeft = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 70%;
  background: red;
  margin-left: 15%;
`;
const StyledHeroCardRight = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: red;
  width: 30%;
  margin-right: 12.5%;
`;

const StyledHeroNav = styled.div`
  width: 20%;
  display: flex;
  margin-left: 75%;
`;

const P = styled.p`
  font-size: var(--font-size);
  white-space: pre-line;
  /* margin-left: 75%; */
  padding: 0;
  flex: 1;
`;

const H3 = styled.h3`
  font-family: "Raleway";
  font-size: var(--font-size-xxl);
  color: var(--color-black);
`;

const H2 = styled.h2`
  color: var(--color-white);
  font-size: var(--font-size-md);
  font-weight: 300;
`;

const StyledP = styled.p`
  font-family: "Raleway";
  font-size: var(--font-size);
  color: var(--color-black);
`;

export default function HeroLanding() {
  return (
    <LandingCardMain>
      <StyledHeroNav>
        <P>Work</P>
        <P>About</P>
        <P>Contact</P>
      </StyledHeroNav>
      <StyledHeroCardContainer>
        <StyledHeroCardLeft>
          <StyledP>SAUL NJIE</StyledP>
          <H3>Creative Developer</H3>
          <H2>
            I make your dreams into a virtual experience of HTML, CSS &
            JavaScript
          </H2>
        </StyledHeroCardLeft>
        <StyledHeroCardRight>dad</StyledHeroCardRight>
      </StyledHeroCardContainer>
    </LandingCardMain>
  );
}
