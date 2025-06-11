import { useUser } from "@/store/useLogin";
import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoute = () => {
  const { user } = useUser();
  return user?.username ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoute;