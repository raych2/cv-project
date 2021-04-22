import React from "react";
import Header from "./components/Header";
import General from "./components/General";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      eduForms: 0,
      jobForms: 0,
    };
  }

  addSchool = (e) => {
    this.setState({
      eduForms: this.state.eduForms + 1,
    });
  };

  cancelSchool = (e) => {
    this.setState({
      eduForms: this.state.eduForms - 1,
    });
  };

  addJob = (e) => {
    this.setState({
      jobForms: this.state.jobForms + 1,
    });
  };

  cancelJob = (e) => {
    this.setState({
      jobForms: this.state.jobForms - 1,
    });
  };

  onSubmitEntry = (e) => {
    e.preventDefault();
    this.setState({
      submitted: !this.state.submitted,
    });
  };

  render() {
    const { submitted } = this.state;
    const extraEduForms = [];
    const extraJobForms = [];
    for (let i = 0; i < this.state.eduForms; i++) {
      extraEduForms.push(
        <EducationForm
          key={i}
          id={i}
          submitted={submitted}
          addSchool={this.addSchool}
          cancelSchool={this.cancelSchool}
        />
      );
    }
    for (let i = 0; i < this.state.jobForms; i++) {
      extraJobForms.push(
        <ExperienceForm
          key={i}
          id={i}
          submitted={submitted}
          addJob={this.addJob}
          cancelJob={this.cancelJob}
        />
      );
    }
    return (
      <div className="App">
        <Header />
        <General submitted={submitted} />
        <h2>Education</h2>
        <EducationForm
          submitted={submitted}
          addSchool={this.addSchool}
          cancelSchool={this.cancelSchool}
        />
        <div className="eduForms">
          {extraEduForms.map((form) => {
            return <div>{form}</div>;
          })}
        </div>
        <h2>Experience</h2>
        <ExperienceForm
          submitted={submitted}
          addJob={this.addJob}
          cancelJob={this.cancelJob}
        />
        <div className="jobForms">
          {extraJobForms.map((jobForm) => {
            return <div>{jobForm}</div>;
          })}
        </div>
        <div className="view-btn-container">
          <button onClick={this.onSubmitEntry}>View/Edit CV</button>
        </div>
      </div>
    );
  }
}

export default App;
