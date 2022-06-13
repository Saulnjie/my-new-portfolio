import styled from "styled-components";
import H2 from "../Title";
import { SiJavascript } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiStrapi, SiReact, SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiAdobexd } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { MdWork } from "react-icons/md";
import { BsHeartFill } from "react-icons/bs";
import { FaPencilAlt } from "react-icons/fa";

const StyledFooter = styled.div`
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
  display: flex;
  flex-direction: row;
  font-size: var(--font-size-md);
  justify-content: space-between;
  width: 50%;
  margin-left: 4px;
`;

const StyledFooterIconWrapperSmall = styled.div`
  display: flex;
  flex-direction: row;
  font-size: var(--font-size-md);
  justify-content: space-between;
  width: 25%;
`;

const StyledFooterInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: var(--font-size);
`;

const StyledMainIcons = styled.div`
  font-size: var(--font-size-lg);
  margin-right: 15px;
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    /* max-width: 90%; */
    margin: auto;
  }
`;

const SkillDescripion = styled.span`
  font-size: 18px;
`;

const LargeIconWrapper = styled.span`
  font-size: 48px;
  margin-right: 10px;
`;
const SmallIconWrapper = styled.span`
  font-size: 28px;
  margin-right: 12px;
  opacity: 0.3;
`;

const IconAndDescriptionWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const SKILLS = [
  {
    Icon: MdWork,
    description: "Languages & framworks I use on aday to day basis",
    skillIcons: [SiJavascript, SiHtml5, SiCss3, SiStrapi],
  },
  {
    Icon: BsHeartFill,
    description: "Languages & framworks I am currently learing",
    skillIcons: [SiReact, SiNextdotjs, SiTailwindcss],
  },
  {
    Icon: FaPencilAlt,
    description: "Design programs I use daily",
    skillIcons: [SiFigma, SiAdobexd],
  },
];

export default function Footer() {
  return (
    <StyledFooter>
      <H2>Skills & Software</H2>
      <SkillsContainer>
        {SKILLS.map(({ Icon, description, skillIcons }, index) => (
          <div key={index}>
            <IconAndDescriptionWrapper>
              <LargeIconWrapper>
                <Icon />
              </LargeIconWrapper>
              <SkillDescripion>{description}</SkillDescripion>
            </IconAndDescriptionWrapper>
            <div>
              {skillIcons.map((Icon, index) => (
                <SmallIconWrapper key={index}>
                  <Icon />
                </SmallIconWrapper>
              ))}
            </div>
          </div>
        ))}
      </SkillsContainer>
    </StyledFooter>
  );
}

// Kan man få til en onclick copy av Email f.eks?
// <button
//   onClick={() =>  navigator.clipboard.writeText('Copy this text to clipboard')}
// >
//   Copy
// </button>
