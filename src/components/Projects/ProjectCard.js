import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { GoMarkGithub } from "react-icons/go";
import { IconContext } from "react-icons";
import {
  LinkName,
  ProjectCard,
  ProjectFrontend,
  ProjectBackend,
  ProjectDetails,
  ProjectImage,
  ProjectLiveLink,
  ProjectTitle,
  ProjectTransitionImage,
} from "../styles/Projects.styled";

const ProjectCardComponent = ({
  image,
  transitionImage,
  title,
  frontend,
  backend,
  live,
  techStack,
}) => {
  return (
    <>
      <IconContext.Provider value={{ size: "1rem" }}>
        
        <ProjectCard>
          
          <ProjectImage src={image} alt={title} />
          <ProjectTransitionImage src={transitionImage} alt={title} />
          <ProjectDetails>
            <ProjectTitle>{title}</ProjectTitle>
            <ProjectFrontend
              href={frontend}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <GoMarkGithub /> */}
              {/* <LinkName>Frontend</LinkName> */}
            </ProjectFrontend>
            <ProjectBackend
              href={backend}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <GoMarkGithub /> */}
              {/* <LinkName>Backend</LinkName> */}
            </ProjectBackend>
            <ProjectLiveLink
              href={live}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLinkExternal />
              <LinkName>Live</LinkName>
            </ProjectLiveLink>
            <h4 style={{ marginTop: "10px" }}>Tech Stack</h4>
            <span style={{ display: "flex" }}>
              {techStack.map((el) => (
                <p key={el.id}>{el}||</p>
              ))}
            </span>
          </ProjectDetails>
        </ProjectCard>
      </IconContext.Provider>
    </>
  );
};

export default ProjectCardComponent;
