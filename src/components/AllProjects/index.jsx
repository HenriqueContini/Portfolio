import React, { useEffect, useState } from "react";
import * as S from "./styles";
import getAllProjects from "../../services/getAllProjects";
import ProjectItem from "./ProjectItem";
import Loading from "../Loading";

export default function AllProjects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadData = async () => {
    const result = await getAllProjects();
    if (result.data) {
      setProjects(result.data);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    loadData();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <S.projectsContainer>
      {projects.map((item, index) => (
        <ProjectItem key={index} data={item} />
      ))}
    </S.projectsContainer>
  );
}
