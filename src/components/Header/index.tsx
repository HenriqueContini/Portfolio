import {
  AppBar,
  Container,
  Link,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Header() {
  return (
    <Container maxWidth={false} component="header" disableGutters={true}>
      <AppBar position="relative">
        <Toolbar
          sx={{
            padding: "30px",
            display: "flex",
            flexDirection: "row",
            gap: "30px",
            justifyContent: "space-between",
          }}
        >
          <Typography align="center" component="h1" variant="h6">
            Portfólio
          </Typography>

          <Stack direction="row" spacing={{ xs: 3, sm: 5 }} component="nav">
            <Link
              href="https://github.com/HenriqueContini"
              underline="hover"
              align="center"
            >
              <GitHubIcon fontSize="large" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/henrique-contini-83a149215/"
              underline="hover"
              align="center"
            >
              <LinkedInIcon fontSize="large" />
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
