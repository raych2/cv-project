import React, { useState } from "react";
import Header from "./components/Header";
import General from "./components/General";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";

const App = () => {
  const [submitted, setSubmitted] = useState(false);
  const [eduForms, setEduForms] = useState(0);
  const [extraEduForms, setExtraEduForms] = useState([]);
  const [jobForms, setJobForms] = useState(0);
  const [extraJobForms, setExtraJobForms] = useState([]);

  const addSchool = (e) => {
    setEduForms(eduForms + 1);
    const newForms = [...extraEduForms, { id: eduForms }];
    setExtraEduForms(newForms);
  };

  const cancelSchool = (id) => {
    const remainder = extraEduForms.filter((item) => item.id !== id);
    setExtraEduForms(remainder);
  };

  const addJob = (e) => {
    setJobForms(jobForms + 1);
    const newJobForms = [...extraJobForms, { id: jobForms }];
    setExtraJobForms(newJobForms);
  };

  const cancelJob = (id) => {
    const jobRemainder = extraJobForms.filter((item) => item.id !== id);
    setExtraJobForms(jobRemainder);
  };

  const onSubmitEntry = (e) => {
    e.preventDefault();
    setSubmitted(!submitted);
  };

  return (
    <div className="App">
      <Header />
      <div className="view">
        <General submitted={submitted} />
        <h2>Education</h2>
        <EducationForm
          submitted={submitted}
          addSchool={addSchool}
          cancelSchool={cancelSchool}
        />
        <div className="eduForms">
          {extraEduForms.map((item) => {
            return (
              <EducationForm
                key={`form-${item.id}`}
                id={item.id}
                submitted={submitted}
                addSchool={addSchool}
                cancelSchool={cancelSchool}
              />
            );
          })}
        </div>
        <h2>Professional Experience</h2>
        <ExperienceForm
          submitted={submitted}
          addJob={addJob}
          cancelJob={cancelJob}
        />
        <div className="jobForms">
          {extraJobForms.map((item) => {
            return (
              <ExperienceForm
                key={`jobForm-${item.id}`}
                id={item.id}
                submitted={submitted}
                addJob={addJob}
                cancelJob={cancelJob}
              />
            );
          })}
        </div>
      </div>
      <div className="view-btn-container">
        <button onClick={onSubmitEntry}>View/Edit CV</button>
      </div>
    </div>
  );
};

export default App;
