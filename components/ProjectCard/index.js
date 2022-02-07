import styled from "styled-components";
import VisitButton from "../Button";

const H2 = styled.h2``;

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
`;

const ProjectCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

const ProjectCardImg = styled.img`
  width: 400px;
  height: auto;
`;

export default function ProjectCard({ imageSrc, title, paragraph }) {
  return (
    <StyledprojectCard>
      <ProjectCardImg src={imageSrc} />
      <ProjectCardWrapper>
        <H2>{title}</H2>
        <P>{paragraph}</P>
        <VisitButton></VisitButton>
      </ProjectCardWrapper>
    </StyledprojectCard>
  );
}
