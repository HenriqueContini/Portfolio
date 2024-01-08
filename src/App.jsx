import { ThemeProvider } from "styled-components";
import * as S from "./styles";
import Home from "./pages/home";
import Header from "./components/header";

const theme = {
  color: {
    primary: "#C778DD",
    gray: "#ABB2BF",
    background: "#282C33",
    white: "#FFFFFF",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <S.container>
        <Header />
        <Home />
      </S.container>
    </ThemeProvider>
  );
}

export default App;
