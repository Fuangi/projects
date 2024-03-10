import { useState } from "react";

function DesignForm() {
  const [members, setMembers] = useState([]);
  const [topic, setTopic] = useState("");

  function handleAddDesignProject(e) {
    e.preventDefault();
  }

  return (
    <form id="form" action="" method="post">
      <div className="input-field">
        <label htmlFor="name">Group member names</label>
        <textarea
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
          type="text"
          name="topic"
          id="topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
      </div>

      <div class="btns">
        <button type="submit" class="btn" onClick={handleAddDesignProject}>
          SUBMIT
        </button>
      </div>
    </form>
  );
}

export default DesignForm;
