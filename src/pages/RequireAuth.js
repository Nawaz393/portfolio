import { useLocation, Navigate, Outlet } from "react-router-dom";
import { isJwtExpired } from "jwt-check-expiration";

const RequireAuth = () => {
  const location = useLocation();
  if (isJwtExpired(JSON.parse(localStorage.getItem("user"))?.token)) {
    localStorage.clear();
    return <Navigate to="/admin" state={{ from: location }} replace />;
  }
  return JSON.parse(localStorage.getItem("user"))?.name ? (
    <Outlet />
  ) : (
    <Navigate to="/admin" state={{ from: location }} replace />
  );
};
export default RequireAuth;
