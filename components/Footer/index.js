import styled from "styled-components";
import H2 from "../Title";
import {SiJavascript} from "react-icons/si"
import {SiCss3} from "react-icons/si"
import {SiHtml5} from "react-icons/si"
import {SiStrapi} from "react-icons/si"
import {SiReact} from "react-icons/si"
import {SiNextdotjs} from "react-icons/si"
import {SiTailwindcss} from "react-icons/si"
import {SiAdobexd} from "react-icons/si"
import {SiFigma} from "react-icons/si"
import {MdWork} from "react-icons/Md"
import {BsHeartFill} from "react-icons/Bs"
import {FaPencilAlt} from "react-icons/Fa"


const StyledFooter = styled.div`
  width: 100%;
  height: 100px;
  // background: red;
  flex: 0 0 auto;
  margin: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--size-huge);
  color: var(--color-white);
`;

const StyledFooterSection = styled.div`
  // background: green;
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */
`;

const StyledFooterIconWrapper = styled.div`
display:flex;
flex-direction:row;
font-size: var(--font-size-lg);
`;

const StyledFooterInfoWrapper = styled.div`
display:flex;
flex-direction:row; 
font-size: var(--font-size);
// align-items:space-evenly; Why??
`;

const StyledMainIcons = styled.div`
font-size: var(--font-size-xl);
margin-right:15px;
`;

export default function Footer() {
  return (
    <>
      <H2>Skills & software</H2>
      <StyledFooter>
        <StyledFooterSection>
          <StyledFooterInfoWrapper>
            <StyledMainIcons>
          <MdWork/>
          </StyledMainIcons>
          Languages & framworks I use on a <br />
          day to day basis
          </StyledFooterInfoWrapper>
          <StyledFooterIconWrapper>
            <SiJavascript/>
            <SiCss3/>
            <SiHtml5/>
            <SiStrapi/>
          </StyledFooterIconWrapper>
        </StyledFooterSection>
        <StyledFooterSection>
          <StyledFooterInfoWrapper>
          <StyledMainIcons>
          <BsHeartFill/>
          </StyledMainIcons>
          Languages & framworks I <br /> am currently learing
          </StyledFooterInfoWrapper>
        <StyledFooterIconWrapper>
        <SiReact/>
        <SiNextdotjs/>
        <SiTailwindcss/>
        </StyledFooterIconWrapper>
        </StyledFooterSection>
        <StyledFooterSection>
          <StyledFooterInfoWrapper>
          <StyledMainIcons>
            <FaPencilAlt/>
          </StyledMainIcons>
        Design programs I use daily
        </StyledFooterInfoWrapper>
        <StyledFooterIconWrapper>
          <SiAdobexd/>
          <SiFigma/>
        </StyledFooterIconWrapper>
        </StyledFooterSection>
      </StyledFooter>
    </>
  );
}
