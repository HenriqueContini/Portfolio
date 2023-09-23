import {
  Box,
  Button,
  Container,
  Divider,
  Typography,
  useTheme,
} from "@mui/material";

export default function Banner() {
  const theme = useTheme();

  return (
    <Container
      component="section"
      disableGutters={true}
      sx={{
        marginTop: "150px",
      }}
    >
      <Typography align="center" component="h2" variant="h3">
        Olá, sou o Henrique!
      </Typography>
      <Divider
        textAlign="center"
        role="presentation"
        sx={{ marginTop: "10px" }}
      >
        <Typography
          align="center"
          component="h3"
          variant="subtitle1"
          color={theme.palette.primary.main}
        >
          Desenvolvedor Full-stack Jr
        </Typography>
      </Divider>
      <Typography
        align="center"
        sx={{ marginTop: "10px" }}
        component="h4"
        variant="h6"
      >
        "Construindo o futuro da web"
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "40px" }}
      >
        <Button
          href="#projects"
          variant="contained"
          size="large"
          sx={{ fontWeight: 600 }}
        >
          Projetos
        </Button>
      </Box>
    </Container>
  );
}
