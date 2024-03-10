const text = ["Van", "Essa", "Hey"];

function ShowDesignProjects() {
  return (
    <div className="projects">
      <h1>Design Project Topics</h1>
      <table className="project-table">
        <thead>
          <tr>
            <th>Project Topic</th>
            <th>Project Members</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lorem ipsum</td>
            <td>
              {text.map((name) => {
                return <div className="members">{name}</div>;
              })}
            </td>
          </tr>
          <tr>
            <td>Lorem ipsum</td>

            <td>
              {text.map((name) => {
                return <div className="members">{name}</div>;
              })}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ShowDesignProjects;
