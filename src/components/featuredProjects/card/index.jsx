import React from "react";
import * as S from "./styles";
import { FiGithub } from "react-icons/fi";
import TextAsTag from "../../TextAsTag";

export default function Card({ project }) {
  return (
    <S.cardWrapper>
      <S.cardImg src={project.img} alt={"Capa do projeto: " + project.name} />
      <S.cardLanguageWrapper>
        {project.tech.map((item, index) => (
          <TextAsTag key={index} text={item} />
        ))}
      </S.cardLanguageWrapper>
      <S.cardInfoWrapper>
        <S.cardInfoTitle>{project.name}</S.cardInfoTitle>
        <S.cardInfoDescription>{project.description}</S.cardInfoDescription>
        <S.cardInfoLink href={project.link}>
          Repositório{" "}
          <div>
            <FiGithub />
          </div>
        </S.cardInfoLink>
      </S.cardInfoWrapper>
    </S.cardWrapper>
  );
}
