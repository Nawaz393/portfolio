import { useLocation, Navigate, Outlet } from "react-router-dom";
import { isJwtExpired } from "jwt-check-expiration";

const RequireAuth = () => {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    return <Navigate to="/admin" state={{ from: location }} replace />;
  }
  if (isJwtExpired(user?.token)) {
    localStorage.clear();
    return <Navigate to="/admin" state={{ from: location }} replace />;
  }
  return user?.name ? (
    <Outlet />
  ) : (
    <Navigate to="/admin" state={{ from: location }} replace />
  );
};
export default RequireAuth;
