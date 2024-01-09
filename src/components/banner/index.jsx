import * as S from "./styles";
import profileImg from "../../assets/profileImg.svg";
import React, { useEffect, useState } from "react";
import { FaSquareFull } from "react-icons/fa";
import getWorkingOn from "../../services/getWorkingOn";

export default function Banner() {
  const [workingOnData, setWorkingOnData] = useState({});

  const getData = async () => {
    setWorkingOnData(await getWorkingOn());
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <S.bannerContainer id="banner">
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
            Atualmente, desenvolvendo:{" "}
            <a
              href={workingOnData.repoUrl ? workingOnData.repoUrl : "#"}
              target={workingOnData.repoUrl ? "_blank" : "_self"}
            >
              {workingOnData.repoName ? workingOnData.repoName : "Portfólio"}
            </a>
          </S.workingOnText>
        </S.workingOnWrapper>
      </S.imageWrapper>
    </S.bannerContainer>
  );
}
