"use client";

import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
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
          marginBottom: "100px",
        }}
      >
        <Banner />
        <Skills />
        <Projects />
      </Container>
    </>
  );
}

export default Home;
