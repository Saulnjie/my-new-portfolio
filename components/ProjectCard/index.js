import styled from "styled-components";
import VisitButton from "../Button";

const H2 = styled.h2`
  font-family: "Raleway";
  font-size: var(--font-size-lg);
  color: var(--color-white);
`;

const P = styled.p`
  font-size: var(--font-size);
  color: var(--color-white);
`;

const StyledprojectCard = styled.div`
  width: 80%;
  height: 320px;
  flex: 0 0 auto;
  background: var(--color-grey);
  margin: auto;
  margin-top: var(--size-xl);
  display: flex;
  flex-direction: row;
`;

const ProjectCardWrapper = styled.div`
  display: flex;
  height: 320px;
  width: auto;
  flex: 0 0 auto;
  background: var(--color-grey);
  margin: auto;
  flex-direction: column;
  margin-left: var(--size-md);
  align-items: right;
  justify-content: right;
`;

const ProjectCardImg = styled.div`
  width: 400px;
  height: 320px;
  background-color: blue;
`;

export default function ProjectCard() {
  return (
    <StyledprojectCard>
      <ProjectCardImg>IMG</ProjectCardImg>
      <ProjectCardWrapper>
        <H2>TSSMuseum</H2>
        <P>
          This was my first real project, ever. This was made for exam purposses
          and is only made as a mockup site.
        </P>
        <P>
          This page is entirely built with HTML & CSS, and was my semester exam
          for this course.
        </P>
        <VisitButton></VisitButton>
      </ProjectCardWrapper>
    </StyledprojectCard>
  );
}
