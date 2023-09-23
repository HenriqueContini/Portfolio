import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import { Container } from "@mui/material";

function Home() {
  return (
    <>
      <Header />
      <Container
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        <Banner />
        <Skills />
      </Container>
    </>
  );
}

export default Home;
