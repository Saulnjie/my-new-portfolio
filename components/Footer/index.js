import styled from "styled-components";
import H2 from "../Title";

const StyledFooter = styled.div`
  width: 100%;
  height: 100px;
  background: red;
  flex: 0 0 auto;
  margin: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--size-huge);
`;

const StyledFooterSection = styled.div`
  background: green;
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */
`;

export default function Footer() {
  return (
    <>
      <H2>Skills & software</H2>
      <StyledFooter>
        <StyledFooterSection>
          Languages & framworks I use on a <br />
          day to day basis
        </StyledFooterSection>
        <StyledFooterSection>
          Languages & framworks I <br /> am currently learing
        </StyledFooterSection>
        <StyledFooterSection>Design programs I use daily</StyledFooterSection>
      </StyledFooter>
    </>
  );
}
