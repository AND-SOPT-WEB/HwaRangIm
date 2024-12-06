import { Outlet } from "react-router-dom";
import { layoutStyle } from "./Layout.style";

const Layout = () => {
  return (
    <main css={layoutStyle}>
      <Outlet />
    </main>
  );
};

export default Layout;
