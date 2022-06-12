import styled from "styled-components";
import Button from "../Button";

const H3 = styled.h2`
  color: var(--color-white);
  font-size: var(--font-size-md);
`;

const P = styled.p`
  font-size: var(--font-size);
  color: var(--color-white);
  white-space: pre-line;
  margin: 0;
  padding: 0;
  flex: 1;
  line-height: 27px;
`;

const StyledprojectCard = styled.div`
  display: flex;
  background: var(--color-grey);
  border-radius: 8px;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const ProjectCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 100%;
  border-radius: 8px 0px 0px 8px;
`;

const ProjectCardImg = styled.img`
  width: 400px;
  height: auto;
  border-radius: 8px 0px 0px 8px;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const StyledLink = styled.a`
  transition: opacity 150ms ease-in-out;
  &:hover {
    opacity: 0.5;
  }
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-black);
  margin-left: auto;
  color: var(--color-white);
  font-size: var(--font-size);
  border-radius: 8px;
  border: none;
  text-decoration: none;
`;

// :hover

export default function ProjectCard({
  imageSrc,
  title,
  paragraph,
  externalUrl,
}) {
  return (
    <StyledprojectCard>
      <ProjectCardImg src={imageSrc} />
      <ProjectCardWrapper>
        <H3>{title}</H3>
        <P>{paragraph}</P>
        <StyledLink href={externalUrl}>Visit Site</StyledLink>
      </ProjectCardWrapper>
    </StyledprojectCard>
  );
}

// LOTTIE Animations
