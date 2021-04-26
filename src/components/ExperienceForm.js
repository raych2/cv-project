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
    };
  }

  handleInputChange = (e) => {
    const input = e.target.id;
    this.setState({
      [input]: e.target.value,
    });
  };

  render() {
    const { company, title, location, jobStart, jobEnd } = this.state;
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
            placeholder="September 2019"
          />
          <label htmlFor="end">End Date:</label>
          <input
            value={this.state.jobEnd}
            type="text"
            id="jobEnd"
            onChange={this.handleInputChange}
            placeholder="June 2021"
          />
        </form>
        <div className="btn-container">
          <button onClick={addJob}>
            <i class="fas fa-plus fa-lg"></i> Job
          </button>
          <button onClick={cancelJob}>
            <i class="far fa-trash-alt fa-lg"></i> Form
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
      />
    );
  }
}

export default ExperienceForm;
