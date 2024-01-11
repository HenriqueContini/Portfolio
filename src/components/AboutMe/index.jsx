import React from "react";
import * as S from "./styles";
import techImg from "../../assets/skillsImg.svg";
import data from "./aboutMeData.json";

export default function AboutMe() {
  return (
    <S.aboutMeContainer id="aboutMe">
      <S.titleWrapper>
        <S.title>
          <span>#</span>Sobre mim
        </S.title>
        <S.titleLine />
      </S.titleWrapper>
      <S.wrapper>
        <S.aboutMeImg src={techImg} />
        <S.textWrapper>
          {data.map((item, index) => (
            <S.text key={index}>{item}</S.text>
          ))}
        </S.textWrapper>
      </S.wrapper>
    </S.aboutMeContainer>
  );
}
