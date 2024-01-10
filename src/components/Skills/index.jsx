import React from "react";
import * as S from "./styles";
import techImg from "../../assets/skillsImg.svg";
import SkillCard from "./SkillCard";
import data from "./skillsData.json";

export default function Skills() {
  return (
    <S.skillsContainer>
      <S.titleWrapper>
        <S.title>
          <span>#</span>Habilidades
        </S.title>
        <S.titleLine />
      </S.titleWrapper>
      <S.skillsWrapper>
        <S.skillsImg src={techImg} />
        <S.skillsCardWrapper>
          {data.map((item, index) => (
            <SkillCard data={item} key={index} />
          ))}
        </S.skillsCardWrapper>
      </S.skillsWrapper>
    </S.skillsContainer>
  );
}
