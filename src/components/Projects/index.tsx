import { Container, Stack, Typography, useTheme } from "@mui/material";
import ProjectCard from "./ProjectCard";
import projectsData from "@/assets/projectsData/data.json";

export default function Projects() {
  const theme = useTheme();

  return (
    <Container
      component="section"
      disableGutters={true}
      sx={{ marginTop: "200px" }}
      id="projects"
    >
      <Typography
        component="h6"
        variant="h4"
        align="center"
        color={theme.palette.primary.main}
      >
        Projetos
      </Typography>
      <Stack
        spacing={6}
        alignContent="center"
        justifyContent="center"
        sx={{ marginTop: "100px" }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
      >
        {projectsData.map((item, index) => (
          <ProjectCard key={index} project={item} />
        ))}
      </Stack>
    </Container>
  );
}
