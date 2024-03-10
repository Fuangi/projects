import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ShowEoyProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(function () {
    axios({
      url: "https://projects-backend-dg1d.onrender.com/projects/eoy",
      method: "get",
    })
      .then(function (res) {
        setProjects(res.data.data.projects);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function handleSort(field) {
    axios({
      url: `https://projects-backend-dg1d.onrender.com/projects/eoy/?sort=${field}`,
      method: "get",
    })
      .then(function (res) {
        setProjects(res.data.data.projects);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="projects eoy">
      <h1>End of Year Project Topics</h1>
      <div className="sort">
        <button onClick={() => handleSort("level")}>Sort By Level</button>
        <button onClick={() => handleSort("specialty")}>
          Sort By Specialty
        </button>
        <button onClick={() => handleSort("supervisor")}>
          Sort By Supervisor
        </button>
        <button>
          <Link
            to="/show-projects/design"
            style={{ textDecoration: "none", color: "white" }}
          >
            View Design Projects
          </Link>
        </button>
      </div>
      <table className="project-table">
        <thead className="eoy-headings">
          <tr>
            <th>Student Name</th>
            <th>Level</th>
            <th>Specialty</th>
            <th>Project Topic 1</th>
            <th>Project Topic 2</th>
            <th>Proposed Supervisor</th>
          </tr>
        </thead>
        <tbody>
          {projects?.map((project) => {
            return (
              <tr key={project?._id}>
                <td>{project.name}</td>
                <td>{project.level}</td>
                <td>{project.specialty}</td>
                <td>{project?.projectTopic1}</td>
                <td>{project?.projectTopic2}</td>
                <td>{project?.projectSupervisor}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ShowEoyProjects;
