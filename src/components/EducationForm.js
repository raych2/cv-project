import React, { useState } from "react";
import Education from "./Education";

const EducationForm = (props) => {
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const submitted = props.submitted;
  const addSchool = props.addSchool;
  const cancelSchool = props.cancelSchool;
  return submitted === false ? (
    <div className="Education form">
      <form onSubmit={this.onSubmitEntry}>
        <label htmlFor="school">University:</label>
        <input
          value={school}
          type="text"
          id="school"
          onChange={(e) => setSchool(e.target.value)}
          placeholder="UC San Diego"
        />
        <label htmlFor="degree">Degree:</label>
        <input
          value={degree}
          type="text"
          id="degree"
          onChange={(e) => setDegree(e.target.value)}
          placeholder="BSc Biochemistry"
        />
        <label htmlFor="start">Start Date:</label>
        <input
          value={start}
          type="text"
          id="start"
          onChange={(e) => setStart(e.target.value)}
          placeholder="09/2015"
        />
        <label htmlFor="end">End Date:</label>
        <input
          value={end}
          type="text"
          id="end"
          onChange={(e) => setEnd(e.target.value)}
          placeholder="06/2019"
        />
      </form>
      <div className="btn-container">
        <button onClick={addSchool}>
          <i className="fas fa-plus fa-lg"></i> School
        </button>
        <button onClick={cancelSchool}>
          <i className="far fa-trash-alt fa-lg"></i> Form
        </button>
      </div>
    </div>
  ) : (
    <Education school={school} degree={degree} start={start} end={end} />
  );
};

export default EducationForm;
