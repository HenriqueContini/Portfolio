import React from "react";
import * as S from "./styles";
import { FaArrowRight } from "react-icons/fa6";
import Card from "./card";
import projectsData from "./data.json";

export default function FeaturedProjects() {
  return (
    <S.featuredProjectsContainer id="projects">
      <S.titleWrapper>
        <S.title>
          <span>#</span>Projetos
        </S.title>
        <S.titleLine />
        <S.seeMoreWrapper>
          <p>Todos</p>
          <div>
            <FaArrowRight />
          </div>
        </S.seeMoreWrapper>
      </S.titleWrapper>
      <S.projectsWrapper>
        {projectsData.map((project, index) => (
          <Card project={project} key={index} />
        ))}
      </S.projectsWrapper>
    </S.featuredProjectsContainer>
  );
}
