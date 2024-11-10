import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import Mypage from "../pages/Mypage/Mypage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/mypage",
    element: <Mypage />,
  },
]);

export default router;
