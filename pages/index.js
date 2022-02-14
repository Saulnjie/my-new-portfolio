import styled from "styled-components";
import ProjectCard from "../components/ProjectCard";
import About from "../components/About";
import HeroLanding from "../components/HeroCard";
import H2 from "../components/Title";

const projectCards = [
  {
    imageSrc: "/images/TSSMCard.jpg",
    title: "TSSMuseum",
    paragraph:
      "This was my first real project, ever. The task here was to make a landing page for a educational museum aimed at children and their parrents.\n The site is only made as a mockup site.\n\nThis page is entirely built with HTML & CSS, and was my semester exam for this course.",
    externalUrl: "https://confident-mestorf-9ca180.netlify.app/",
  },
  {
    imageSrc: "/images/AylaCard.jpg",
    title: "Aylagursoy.com",
    paragraph:
      "This project was a pet-project that was made for a friend of mine. The site was made as \n a portfolio for her designs and other work.\n\nThis page was built with HTML & CSS, but was also my intro to Javascript. ",
    externalUrl: "https://aylagursoy.com/",
  },
  {
    imageSrc: "/images/CammiesCard.jpg",
    title: "Cammies Records",
    paragraph:
      "This is the last project I'v been working on. This was a ecommerce site, and was made\n with HTML, CSS & Javascript.\n\n The exam was supposed to test us on headless CMSs and creating an API for a\n Ecommerce website. The project was made as a mockup.",
    externalUrl: "https://eager-ardinghelli-8f1c31.netlify.app/index.html",
  },
];

const ProjectCardWrapper = styled.div`
  display: grid;
  gap: 32px;
  margin: 40px 0;
`;

const SkyImageWrapper = styled.div`
  background: url("/images/bluesky.jpg");
  /* width: 100%;
  height: 600px;
  object-fit: cover; */
`;

const Spacer = styled.div`
  margin-top: var(--size-huge);
`;

export default function Home() {
  return (
    <div>
      <SkyImageWrapper></SkyImageWrapper>
      <HeroLanding></HeroLanding>
      <Spacer></Spacer>
      <H2>Projects</H2>
      <ProjectCardWrapper>
        {projectCards.map((projectCard) => {
          return (
            <ProjectCard
              imageSrc={projectCard.imageSrc}
              title={projectCard.title}
              paragraph={projectCard.paragraph}
              externalUrl={projectCard.externalUrl}
            />
          );
        })}
      </ProjectCardWrapper>
      <Spacer></Spacer>
      <H2>About</H2>
      <About></About>
      <Spacer></Spacer>
    </div>
  );
}
