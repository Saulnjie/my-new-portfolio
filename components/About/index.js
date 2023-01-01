import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { SiInstagram } from "react-icons/si";

const StyledAboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: var(--color-white);
  position: relative;
  overflow: hidden;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const StyledAboutSection = styled.div`
  width: 50%;
  min-height: 580px;
  flex: 0 0 auto;
  background: var(--color-white);
  padding: var(--size-lg);
  margin-top: var(--size-xl);
  margin-bottom: var(--size-xl);
  margin-left: 12.5%;
  @media (max-width: 1000px) {
    width: 100%;
    margin-left: 0;
  }
`;

const StyledIconSection = styled.div`
  width: 30%;
  display: flex;
  /* background-color: red; */
  border-left: 5px solid var(--color-grey);
  height: 400px;
  margin: auto;
  color: #676767;
  flex-direction: column;
  font-size: var(--font-size-lg);
  justify-content: space-evenly;
  align-items: center;
  // justify-items:space-between;
  @media (max-width: 1000px) {
    width: 50%;
    margin-left: 10%;
    margin-bottom: 20px;
  }
`;

const P = styled.p`
  font-size: var(--font-size);
  color: var(--color-black);
  line-height: 27px;
`;

const H3 = styled.h3`
  font-family: "Raleway";
  font-size: var(--font-size-xxl);
  color: var(--color-black);
  margin: 0;
`;

const StyledP = styled.p`
  font-family: "Raleway";
  font-size: var(--font-size);
  font-weight: 600;
  color: var(--color-tertiary);
  letter-spacing: 1.5px;
`;

const StyledHelloWorldText = styled.span`
  font-size: 100px;
  white-space: nowrap;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 700;
  position: absolute;
  top: -35px;
  right: 0;
  opacity: 0.1;
`;

const StyledLink = styled.a`
  transition: opacity 150ms ease-in-out;
  &:hover {
    opacity: 0.5;
  }
`;

export default function About() {
  return (
    <StyledAboutContainer>
      <StyledHelloWorldText>Hello World</StyledHelloWorldText>
      <StyledAboutSection>
        <StyledP>My name is</StyledP>
        <H3>Saul Njie</H3>
        <P>
          My name is Saul Njie. I&lsquo;m a 30 year old Oslo based
          Front-End-Developmenter that just finished my studies at Noroff, campus
          Oslo. I love beeing creative, work out projects and to solve problems,
          that is why I love what I do! The languages used it my pages are
          currently HTML, CSS and JavaScript. And framworks like React and NextJS. My work-idiology is: Click on Clicking!
        </P>
        <P>
          For any questions or inquiries, please do not hesitate to contact me
          through social media, Github or by email.
        </P>
      </StyledAboutSection>
      <StyledIconSection>
        <StyledLink href="https://github.com/Saulnjie" target="_blank">
          <FaGithub />
        </StyledLink>
        <StyledLink href="mailto:saul.njie.dev@gmail.com" target="_blank">
          <SiGmail />
        </StyledLink>
        <StyledLink href="https://www.instagram.com/saulsays/" target="_blank">
          <SiInstagram />
        </StyledLink>
      </StyledIconSection>
    </StyledAboutContainer>
  );
}
