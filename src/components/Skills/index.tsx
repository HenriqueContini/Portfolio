import {
  Box,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

const SKILLS: string[] = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React JS",
  "Node.js",
  "MySQL",
  "FireBase",
  "GIT",
  "Cypress",
  "Material UI",
  "Styled Components",
  "Python",
];

export default function Skills() {
  const theme = useTheme();

  return (
    <Container component="section" disableGutters={true}>
      <Grid
        container
        spacing={8}
        direction="row"
        justifyContent="space-between"
      >
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Typography
              component="h5"
              variant="h5"
              align="center"
              sx={{ marginBottom: "15px" }}
              color={theme.palette.primary.main}
            >
              Sobre mim
            </Typography>
            <Typography component="p" variant="body1">
              Sou bastante curioso e sempre estou aprendendo algo novo.
            </Typography>
            <Typography component="p" variant="body1">
              Atualmente, estou no último ano da faculdade de Análise e
              Desenvolvimento de Sistemas, onde estou aprendendo um pouco mais
              sobre banco de dados, desenvolvimento web e design patterns.
            </Typography>
            <Typography component="p" variant="body1">
              Durante meu estágio, tive contato com o desenvolvimento Full Stack
              em React.js, Node.js, MySQL e Python. Também, tive a oportunidade
              de participar de uma equipe de QA, onde eu era responsável pela
              documentação e realização de testes.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Typography
              component="h5"
              variant="h5"
              align="center"
              sx={{ marginBottom: "15px" }}
              color={theme.palette.primary.main}
            >
              Tecnologias
            </Typography>
            <Stack
              spacing={{ xs: 1, sm: 2 }}
              direction="row"
              useFlexGap
              flexWrap="wrap"
            >
              {SKILLS.map((item) => (
                <Chip label={item} />
              ))}
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
