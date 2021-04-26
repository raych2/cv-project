import React from "react";

class Experience extends React.Component {
  render() {
    const company = this.props.company;
    const title = this.props.title;
    const location = this.props.location;
    const jobStart = this.props.jobStart;
    const jobEnd = this.props.jobEnd;
    const responsibilities = this.props.responsibilities;
    return (
      <div className="experience-view">
        <div className="title">{title}</div>
        <div className="company">{company}</div>
        <div className="location">{location}</div>
        <div className="dates">
          {jobStart}-{jobEnd}
        </div>
        <div className="responsibilities">{responsibilities}</div>
      </div>
    );
  }
}

export default Experience;
