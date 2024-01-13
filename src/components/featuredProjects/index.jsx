import React from "react";
import * as S from "./styles";
import { FaArrowRight } from "react-icons/fa6";
import Card from "./Card";
import projectsData from "./data.json";
import Title from "../Title";
import { Link } from "react-router-dom";

export default function FeaturedProjects() {
  return (
    <S.featuredProjectsContainer>
      <Title text="Projetos">
        <S.seeMore>
          <Link to="/projetos">
            <p>Todos</p>
            <div>
              <FaArrowRight />
            </div>
          </Link>
        </S.seeMore>
      </Title>
      <S.projectsWrapper>
        {projectsData.map((project, index) => (
          <Card project={project} key={index} />
        ))}
      </S.projectsWrapper>
    </S.featuredProjectsContainer>
  );
}
