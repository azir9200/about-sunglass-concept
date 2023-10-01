import { Outlet } from "react-router-dom";
// import Navbar from "../Pages/Navbar/Navbar";
import Navigation from "../Navigation/Navigation";


const Root = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;