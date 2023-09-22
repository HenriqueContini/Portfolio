import {
  AppBar,
  Container,
  Link,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

export default function Header() {
  return (
    <Container maxWidth={false} component="header">
      <AppBar sx={{ paddingInline: "30px" }}>
        <Toolbar
          sx={{
            padding: "30px",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: "30px",
            justifyContent: "space-between",
          }}
        >
          <Typography align="center" component="h1" variant="h6">
            Henrique Contini
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 2, sm: 8 }}
            component="nav"
          >
            <Link
              href="https://github.com/HenriqueContini"
              underline="hover"
              align="center"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/henrique-contini-83a149215/"
              underline="hover"
              align="center"
            >
              LinkedIn
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
