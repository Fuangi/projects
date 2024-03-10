function ShowEoyProjects() {
  // function handleSort(field) {}

  return (
    <div className="projects eoy">
      <h1>End of Year Project Topics</h1>
      <div className="sort">
        <button>Sort By Level</button>
        <button>Sort By Specialty</button>
        <button>Sort By Supervisor</button>
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
          <tr>
            <td>Your Name</td>
            <td>Your Level</td>
            <td>Your Specialty</td>
            <td>Your Project 1</td>
            <td>Your Project 2</td>
            <td>Your Supervisor</td>
          </tr>
          <tr>
            <td>Your Name</td>
            <td>Your Level</td>
            <td>Your Specialty</td>
            <td>Your Project 1</td>
            <td>Your Project 2</td>
            <td>Your Supervisor</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ShowEoyProjects;
