import styled from "styled-components";
import ProjectCard from "../components/ProjectCard";
import About from "../components/About";

const Demo = styled.div`
  background-color: red;
  width: 200px;
  height: 150px;
`;

const projectCards = [
  {
    imageSrc: "/images/TSSMCard.jpg",
    title: "TSSMuseum",
    paragraph:
      "This was my first real project, ever. This was made for exam purposses and is only made as a mockup site.\nThis page is entirely built with HTML & CSS, and was my semester exam for this course.",
  },
  {
    imageSrc: "/images/TSSMCard.jpg",
    title: "Title two",
    paragraph: `
    Hello
    World
    asdkoasdkosakd`,
  },
];

const ProjectCardWrapper = styled.div`
  display: grid;
  gap: 32px;
  margin: 40px 0;
`;

export default function Home() {
  return (
    <div>
      <ProjectCardWrapper>
        {projectCards.map((projectCard) => {
          return (
            <ProjectCard
              imageSrc={projectCard.imageSrc}
              title={projectCard.title}
              paragraph={projectCard.paragraph}
            />
          );
        })}
      </ProjectCardWrapper>
      <About></About>
    </div>
  );
}
