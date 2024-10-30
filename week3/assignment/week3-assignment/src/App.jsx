import { Global, ThemeProvider } from "@emotion/react";
import GlobalStyle from "./styles/global";
import { Theme } from "./styles/theme";
import Home from "@pages/Home/Home";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Global styles={GlobalStyle} />
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
