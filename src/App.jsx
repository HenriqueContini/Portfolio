import { ThemeProvider } from "styled-components";
import * as S from "./styles";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

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
        <Outlet />
      </S.container>
    </ThemeProvider>
  );
}

export default App;
