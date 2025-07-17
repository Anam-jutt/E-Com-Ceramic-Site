import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MinimalLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MinimalLayout;
