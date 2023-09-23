import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Project } from "@/types/Project";

interface ProjectProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={project.name}
        height="140"
        image={project.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="p">
          {project.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ marginBottom: "10px", display: "flex", justifyContent: "center" }}
      >
        <Button
          href={project.link}
          variant="outlined"
          startIcon={<GitHubIcon />}
        >
          Repositório
        </Button>
      </CardActions>
    </Card>
  );
}
