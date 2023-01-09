import { useLocation, Navigate, Outlet } from "react-router-dom";
const RequireAuth = () => {
  const location = useLocation();
  return JSON.parse(localStorage.getItem("user"))?.name ?  
    <Outlet />
  : 
    <Navigate to="/admin" state={{ from: location }} replace />  
};

export default RequireAuth;
