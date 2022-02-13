import styled from "styled-components";
import {MdWork} from "react-icons/Md";
import {MdLocationOn} from "react-icons/Md";

const LandingCardMain = styled.div`
  background: var(--color-white);
  height: 700px;
  width: 100%;
  margin-top: var(--size-xl);
`;

const StyledHeroCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* background: yellow; */
  height: 100%;
  width: 100%;
  /* margin-top: var(--size-xl); */
`;

const StyledHeroCardLeft = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 70%;
  /* background: red; */
  margin-left: 15%;
  margin-top: 10%;
`;
const StyledHeroCardRight = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  /* background: red; */
  width: 30%;
  margin-right: 12.5%;
`;

const StyledHeroImage = styled.div`
  background: url("/images/Saul.png");
  height: 279px;
  width: 287px;
  margin: auto;
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
  margin: 0; /*Kanskje ikke beholde?*/
`;

const H2 = styled.h2`
  color: var(--color-black);
  font-size: var(--font-size-md);
  font-weight: 300;
`;

const StyledP = styled.p`
  font-family: "Raleway";
  font-size: var(--font-size);
  font-weight: 500;
  color: var(--color-tertiary);
`;

export default function HeroLanding() {
  return (
    <LandingCardMain>
      <StyledHeroCardContainer>
        <StyledHeroCardLeft>
          <StyledP>SAUL NJIE</StyledP>
          <H3>Creative Developer</H3>
          <H2>
            I make your dreams into a virtual experience of HTML, CSS &
            JavaScript
          </H2>
          <StyledP><MdWork/>Front-End Dev Student</StyledP>
          <StyledP><MdLocationOn/>Oslo, Norway</StyledP>
        </StyledHeroCardLeft>
        <StyledHeroCardRight>
          <StyledHeroImage></StyledHeroImage>
        </StyledHeroCardRight>
      </StyledHeroCardContainer>
    </LandingCardMain>
  );
}
