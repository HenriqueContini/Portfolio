import React, { useEffect, useState } from "react";
import * as S from "./styles";
import getAllProjects from "../../services/getAllProjects";
import ProjectItem from "./ProjectItem";

export default function AllProjects() {
  const [projects, setProjects] = useState([]);

  const loadData = async () => {
    const result = await getAllProjects();
    setProjects(result.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <S.projectsContainer>
      {projects.map((item, index) => (
        <ProjectItem key={index} data={item} />
      ))}
    </S.projectsContainer>
  );
}
