import * as S from "./styles";
import profileImg from "../../assets/profileImg.svg";
import React from "react";
import { RiCheckboxBlankFill } from "react-icons/ri";
import { MdCircle } from "react-icons/md";
import { FaSquareFull } from "react-icons/fa";

export default function Banner() {
  return (
    <S.bannerContainer>
      <S.textWrapper>
        <S.bannerTitle>
          Henrique, <span>desenvolvedor web full-stack</span> & <span>QA</span>
        </S.bannerTitle>
        <S.bannerText>
          Criando aplicações web funcionais, responsivas e com qualidade
        </S.bannerText>
      </S.textWrapper>
      <S.imageWrapper>
        <S.bannerImage
          src={profileImg}
          alt="Imagem de uma pessoa orgulhosa de si mesma, ao lado de um computador"
        />
        <S.workingOnWrapper>
          <S.workingOnIcon>
            <FaSquareFull />
          </S.workingOnIcon>
          <S.workingOnText>
            Atualmente, desenvolvendo: <span>workshop-springboot3-jpa</span>
          </S.workingOnText>
        </S.workingOnWrapper>
      </S.imageWrapper>
    </S.bannerContainer>
  );
}
