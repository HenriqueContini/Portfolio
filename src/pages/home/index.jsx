import React from "react";
import Banner from "../../components/Banner";
import * as S from "./styles";
import FeaturedProjects from "../../components/FeaturedProjects";
import Skills from "../../components/Skills";

export default function Home() {
  return (
    <S.HomeContainer>
      <Banner />
      <FeaturedProjects />
      <Skills />
    </S.HomeContainer>
  );
}
