import { Navigate } from "react-router-dom";

function PrivateRoutes({ children }) {
  let innerdata = JSON.parse(localStorage.getItem("userInfo")) || [];

  if (innerdata.length === 0) {
    return <Navigate to="/signup" />;
  }
  return <>{children}</>;
}

export default PrivateRoutes;
