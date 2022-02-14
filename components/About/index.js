import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const StyledAboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: var(--color-white);
`;

const StyledAboutSection = styled.div`
  width: 50%;
  height: 580px;
  flex: 0 0 auto;
  background: var(--color-white);
  padding: var(--size-lg);
  margin-top: var(--size-xl);
  margin-bottom: var(--size-xl);
  margin-left: 12.5%;
`;

const StyledIconSection = styled.div`
  width: 30%;
  display: flex;
  /* background-color: red; */
  border-left: 5px solid var(--color-grey);
  height: 550px;
  margin: auto;
  color: #676767;
`;

const P = styled.p`
  font-size: var(--font-size);
  color: var(--color-black);
`;

const H3 = styled.h3`
  font-family: "Raleway";
  font-size: var(--font-size-xxl);
  color: var(--color-black);
`;

const StyledP = styled.p`
  font-family: "Raleway";
  font-size: var(--font-size);
  font-weight: 500;
  color: var(--color-tertiary);
`;

export default function About() {
  return (
    <StyledAboutContainer>
      <StyledAboutSection>
        <StyledP>My name is</StyledP>
        <H3>Saul Njie</H3>
        <P>
          I'm baby whatever craft beer cliche blog austin cold-pressed hammock
          yuccie kale chips hoodie actually man bun. Ramps polaroid selvage
          chillwave hashtag. +1 normcore before they sold out hammock,
          skateboard cardigan wayfarers gluten-free occupy cred. Glossier la
          croix tousled portland chicharrones helvetica art party quinoa hoodie
          meh subway tile tote bag. I'm baby whatever craft beer cliche blog
          austin cold-pressed hammock yuccie kale chips hoodie actually man bun
        </P>
      </StyledAboutSection>
      <StyledIconSection>
        <a>
          <FaGithub />
        </a>
        <a>
          <i className="" />
        </a>
        <a>
          <i className="" />
        </a>
      </StyledIconSection>
    </StyledAboutContainer>
  );
}
