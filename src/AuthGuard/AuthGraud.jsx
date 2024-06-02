import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AuthGuard = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/user/home");
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return  <Outlet />
};

export default AuthGuard;
