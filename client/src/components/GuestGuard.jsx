import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GuestGuard = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!localStorage.getItem("token")) {
        navigate("/signup");
      }
    }, 30000); // 30 seconds

    const clickHandler = () => {
      if (!localStorage.getItem("token")) {
        navigate("/signup");
      }
    };

    document.addEventListener("click", clickHandler);
    return () => {
      clearTimeout(timeout);
      document.removeEventListener("click", clickHandler);
    };
  }, [navigate]);

  return <>{children}</>;
};

export default GuestGuard;
