import React from "react";
import * as S from "./styles";

export default function SkillCard({ data }) {
  return (
    <S.cardContainer>
      <S.cardTitle>{data.name}</S.cardTitle>
      <S.cardTechWrapper>
        {data.skills.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </S.cardTechWrapper>
    </S.cardContainer>
  );
}
