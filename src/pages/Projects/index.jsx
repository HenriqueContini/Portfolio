import React from "react";
import * as S from "./styles";
import Title from "../../components/Title";
import FeaturedProjects from "../../components/FeaturedProjects";
import AllProjects from "../../components/AllProjects";
import Loading from "../../components/Loading";

export default function Projects() {
  return (
    <S.projectsContainer>
      <S.pageTitleWrapper>
        <S.pageTitle>
          <span>/</span>Projetos
        </S.pageTitle>
        <S.pageTitleDescription>Lista dos meus projetos</S.pageTitleDescription>
      </S.pageTitleWrapper>
      <S.wrapper>
        <Title text="Em destaque" showLine={false} />
        <FeaturedProjects showSectionTitle={false} />
      </S.wrapper>
      <S.wrapper>
        <Title text="Todos" showLine={false} />
        <AllProjects />
      </S.wrapper>
    </S.projectsContainer>
  );
}
