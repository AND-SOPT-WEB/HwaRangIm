import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import Mypage from "../pages/Mypage/Mypage";
import Layout from "../pages/Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup/:step",
        element: <SignUpPage />,
      },
      {
        path: "/mypage",
        element: <Mypage />,
      },
    ],
  },
]);

export default router;
