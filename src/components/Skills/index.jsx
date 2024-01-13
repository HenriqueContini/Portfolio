import React from "react";
import * as S from "./styles";
import SkillCard from "./SkillCard";
import data from "./skillsData.json";
import Title from "../Title";

export default function Skills() {
  return (
    <S.skillsContainer>
      <Title text="Habilidades" />
      <S.skillsCardWrapper>
        {data.map((item, index) => (
          <SkillCard data={item} key={index} />
        ))}
      </S.skillsCardWrapper>
    </S.skillsContainer>
  );
}
