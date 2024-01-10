import { ThemeProvider } from "styled-components";
import * as S from "./styles";
import Home from "./pages/Home";
import Header from "./components/Header";

const theme = {
  color: {
    primary: "#45BDDC",
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
