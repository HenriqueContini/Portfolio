import React from "react";
import * as S from "./styles";
import TextAsTag from "../../TextAsTag";

export default function SkillCard({ data }) {
  return (
    <S.cardContainer>
      <S.cardTitle>{data.name}</S.cardTitle>
      <S.cardTechWrapper>
        {data.skills.map((item, index) => (
          <TextAsTag key={index} text={item} />
        ))}
      </S.cardTechWrapper>
    </S.cardContainer>
  );
}
