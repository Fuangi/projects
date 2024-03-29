import { useState } from "react";
import axios from "axios";

function DesignForm() {
  const [members, setMembers] = useState([]);
  const [topic, setTopic] = useState("");
  const [showSuccess, setShowSuccess] = useState("");

  function handleAddDesignProject(e) {
    e.preventDefault();
    console.log(members);
    let arrayStud = members.split("\n");

    axios({
      url: "https://projects-backend-dg1d.onrender.com/projects/design",
      method: "post",
      data: {
        members: arrayStud,
        project: topic,
      },
    })
      .then(function (res) {
        if (res.status === 201) {
          console.log(res);
          setShowSuccess("Success!!!");
        }
      })
      .catch(function (res) {
        setShowSuccess("Failed!!! Re-submit the form");
        console.log(res);
      });
  }

  return (
    <form id="form" action="" method="post">
      <h3>Ensure you have grouped yourselves in 3 please!</h3>
      <div className="input-field">
        <label htmlFor="name">Group member names</label>
        <textarea
          placeholder="Enter your names, each on a new line"
          class="input"
          id="textarea"
          cols="30"
          rows="6"
          value={members}
          onChange={(e) => setMembers(e.target.value)}
        ></textarea>
      </div>

      <div className="input-field">
        <label htmlFor="topic">Project Topic </label>
        <input
          class="input"
          placeholder="Enter your project topic"
          type="text"
          name="topic"
          id="topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
      </div>
      <div className="success">{showSuccess}</div>
      <div class="btns">
        <button type="submit" class="btn" onClick={handleAddDesignProject}>
          SUBMIT
        </button>
      </div>
    </form>
  );
}

export default DesignForm;
