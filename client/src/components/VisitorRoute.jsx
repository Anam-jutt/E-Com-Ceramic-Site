import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const VisitorRoute = ({ children }) => {
  const navigate = useNavigate();
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const redirectToSignup = () => {
      setFadingOut(true);
      setTimeout(() => navigate("/signup"), 500); // fade duration = 500ms
    };

    const timer = setTimeout(redirectToSignup, 10000); // 10 seconds

    const handleClick = () => {
      clearTimeout(timer);
      redirectToSignup();
    };

    document.addEventListener("click", handleClick);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", handleClick);
    };
  }, [navigate]);

  return (
   <div
  className={`transition-opacity duration-500 ${
    fadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
  }`}
>
  {fadingOut ? (
    <div className="text-center text-gray-600 mt-20 text-lg animate-pulse">
      Redirecting to signup...
    </div>
  ) : (
    children
  )}
</div>
  );
};

export default VisitorRoute;
