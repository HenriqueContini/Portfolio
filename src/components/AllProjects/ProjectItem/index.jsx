import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { FiGithub } from "react-icons/fi";
import TextAsTag from "../../TextAsTag";
import { getProjectLanguages } from "../../../services/getAllProjects";

export default function ProjectItem({ data }) {
  const [languages, setLanguages] = useState();

  const loadLanguages = async () => {
    const result = await getProjectLanguages(data.languages_url);
    if (result.length > 0) {
      setLanguages(result);
    }
  };

  useEffect(() => {
    loadLanguages();
  }, []);

  return (
    <S.container>
      {languages && (
        <S.languagesWrapper>
          {languages.map((item, index) => (
            <TextAsTag text={item} key={index} />
          ))}
        </S.languagesWrapper>
      )}
      <S.textWrapper>
        <S.textTitle>{data.name}</S.textTitle>
        <S.textDescription>
          {data.description ? data.description : "Sem descrição"}
        </S.textDescription>
        <S.textButton href={data.url}>
          Repositório
          <div>
            <FiGithub />
          </div>
        </S.textButton>
      </S.textWrapper>
    </S.container>
  );
}
