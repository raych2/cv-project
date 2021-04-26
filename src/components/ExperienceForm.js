import React from "react";
import Experience from "./Experience";

class ExperienceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company: "",
      title: "",
      location: "",
      jobStart: "",
      jobEnd: "",
      responsibilities: "",
    };
  }

  handleInputChange = (e) => {
    const input = e.target.id;
    this.setState({
      [input]: e.target.value,
    });
  };

  render() {
    const {
      company,
      title,
      location,
      jobStart,
      jobEnd,
      responsibilities,
    } = this.state;
    const submitted = this.props.submitted;
    const addJob = this.props.addJob;
    const cancelJob = this.props.cancelJob;
    return submitted === false ? (
      <div className="Experience form">
        <form onSubmit={this.onSubmitEntry}>
          <label htmlFor="title">Title:</label>
          <input
            value={this.state.title}
            type="text"
            id="title"
            onChange={this.handleInputChange}
            placeholder="Software Engineer"
          />
          <label htmlFor="company">Company:</label>
          <input
            value={this.state.company}
            type="text"
            id="company"
            onChange={this.handleInputChange}
            placeholder="Some FAANG"
          />
          <label htmlFor="location">Location:</label>
          <input
            value={this.state.location}
            type="text"
            id="location"
            onChange={this.handleInputChange}
            placeholder="San Francisco, CA"
          />
          <label htmlFor="jobStart">Start Date:</label>
          <input
            value={this.state.jobStart}
            type="text"
            id="jobStart"
            onChange={this.handleInputChange}
            placeholder="09/2019"
          />
          <label htmlFor="end">End Date:</label>
          <input
            value={this.state.jobEnd}
            type="text"
            id="jobEnd"
            onChange={this.handleInputChange}
            placeholder="06/2021"
          />
          <label htmlFor="responsibilities">Job Responsibilities:</label>
          <textarea
            value={this.state.responsibilities}
            id="responsibilities"
            onChange={this.handleInputChange}
            placeholder="Describe your job responsibilities"
          />
        </form>
        <div className="btn-container">
          <button onClick={addJob}>
            <i className="fas fa-plus fa-lg"></i> Job
          </button>
          <button onClick={cancelJob}>
            <i className="far fa-trash-alt fa-lg"></i> Form
          </button>
        </div>
      </div>
    ) : (
      <Experience
        company={company}
        title={title}
        location={location}
        jobStart={jobStart}
        jobEnd={jobEnd}
        responsibilities={responsibilities}
      />
    );
  }
}

export default ExperienceForm;
