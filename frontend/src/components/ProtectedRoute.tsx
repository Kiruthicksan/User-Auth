import { Navigate } from "react-router-dom"
import { useAuth } from "./useAuth"



const RoleProtectedRoute = ({children} : {children: React.ReactNode}) => {
  const token = localStorage.getItem('token')
  const {role , loading}= useAuth()

  if (loading) return <div>Loading...</div>;

  if (!token) return <Navigate to="/login" replace />;

  if (!role) return <Navigate to="/register" replace />;

 

  

 
  return <>{children}</>
}
export default RoleProtectedRoute