import React from "react";
import Banner from "../../components/banner";
import * as S from "./styles";
import FeaturedProjects from "../../components/featuredProjects";

export default function Home() {
  return (
    <S.HomeContainer>
      <Banner />
      <FeaturedProjects />
    </S.HomeContainer>
  );
}
