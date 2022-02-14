import styled from "styled-components";
import { MdWork } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { Player } from "@lottiefiles/react-lottie-player";

const LandingCardMain = styled.div`
  background: var(--color-white);
  height: 700px;
  width: 100%;
  margin-top: var(--size-xxl);
`;

const StyledHeroCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* background: yellow; */
  height: 100%;
  width: 100%;
  /* margin-top: var(--size-xl); */
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
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
  z-index: 2;
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
  letter-spacing: 1.5px;
  line-height: 80%;

  @media (max-width: 1000px) {
    /* font-size: 16px; */
  }
`;

const H2 = styled.h2`
  color: var(--color-black);
  font-size: var(--font-size-md);
  font-weight: 300;
  letter-spacing: 1.5px;
`;

const StyledP = styled.p`
  font-family: "Raleway";
  font-size: var(--font-size);
  font-weight: 600;
  color: var(--color-tertiary);
  letter-spacing: 1.5px;
  display: flex;
  flex-direction: row;
  // align-items: center; Få ikoner og tekst på linje?
`;

const StyledHeroIcons = styled.div`
  font-size: var(--font-size-md);
  margin-right: 10px;
`;

const IconContainer = styled.div`
  &:last-of-type {
    margin-top: 8px;
  }
  color: var(--color-tertiary);
  display: flex;
  gap: 8px;
`;

const HeroImageWrapper = styled.div`
  position: relative;
  margin: auto;
`;

const StyledPlayer = styled(Player)`
  position: absolute;
  transform: scale(2);
  z-index: 1;
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
          <IconContainer>
            <MdWork />
            Front-End Dev Student
          </IconContainer>
          <IconContainer>
            <MdLocationOn />
            Oslo, Norway
          </IconContainer>
        </StyledHeroCardLeft>
        <StyledHeroCardRight>
          <HeroImageWrapper>
            <StyledPlayer
              src="/lottie/lf30_editor_gg4pgfqe.json"
              autoplay
              loop
            />
            <StyledHeroImage></StyledHeroImage>
          </HeroImageWrapper>
        </StyledHeroCardRight>
      </StyledHeroCardContainer>
    </LandingCardMain>
  );
}
