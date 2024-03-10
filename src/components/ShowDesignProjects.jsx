import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ShowDesignProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(function () {
    axios({
      url: "https://projects-backend-dg1d.onrender.com/projects/design",
      method: "get",
    })
      .then(function (res) {
        setProjects(res.data.data.projects);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="projects">
      <h1>Design Project Topics</h1>
      <button className="view-page">
        <Link
          to="/show-projects/eoy"
          style={{ textDecoration: "none", color: "white" }}
        >
          View Design Projects
        </Link>
      </button>
      <table className="project-table">
        <thead>
          <tr>
            <th>Project Topic</th>
            <th>Project Members</th>
          </tr>
        </thead>
        <tbody>
          {projects?.map((project) => {
            return (
              <tr key={project._id}>
                <td>{project?.project}</td>
                <td>
                  {project?.members.map((member) => {
                    return <div className="members">{member}</div>;
                  })}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ShowDesignProjects;
