import { Outlet } from "react-router";
import Header from "./components/Header";

function Projects() {
  return (
    <div className="landing-page">
      <Header />
      <Outlet />
    </div>
  );
}

export default Projects;
