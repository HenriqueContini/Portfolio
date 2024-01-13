import React from "react";
import * as S from "./styles";
import techImg from "../../assets/skillsImg.svg";
import data from "./aboutMeData.json";
import Title from "../Title";

export default function AboutMe() {
  return (
    <S.aboutMeContainer>
      <Title text="Sobre mim" />
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
