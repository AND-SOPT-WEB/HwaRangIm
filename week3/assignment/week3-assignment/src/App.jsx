import { Global, ThemeProvider } from "@emotion/react";
import GlobalStyle from "./styles/global";
import { Theme } from "./styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Global styles={GlobalStyle} />
      </ThemeProvider>
    </>
  );
}

export default App;
