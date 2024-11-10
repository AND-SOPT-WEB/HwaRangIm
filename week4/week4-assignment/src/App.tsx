import { Global, ThemeProvider } from "@emotion/react";
import { Theme } from "./styles/theme";
import GlobalStyle from "./styles/global";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";

const App = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Global styles={GlobalStyle} />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
};

export default App;
