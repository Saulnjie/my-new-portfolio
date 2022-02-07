import styled from "styled-components";
import Button from "../Button";

const H2 = styled.h2`
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
`;

const StyledprojectCard = styled.div`
  display: flex;
  background: var(--color-grey);
  border-radius: 8px;
`;

const ProjectCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 100%;
`;

const ProjectCardImg = styled.img`
  width: 400px;
  height: auto;
  border-radius: 8px 0px 0px 8px;
`;

export default function ProjectCard({ imageSrc, title, paragraph }) {
  return (
    <StyledprojectCard>
      <ProjectCardImg src={imageSrc} />
      <ProjectCardWrapper>
        <H2>{title}</H2>
        <P>{paragraph}</P>
        <Button>Visit site</Button>
      </ProjectCardWrapper>
    </StyledprojectCard>
  );
}
