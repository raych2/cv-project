import React from "react";

class Education extends React.Component {
  render() {
    const school = this.props.school;
    const degree = this.props.degree;
    const start = this.props.start;
    const end = this.props.end;
    return (
      <div className="education-view">
        <div className="degree">{degree}</div>
        <div className="schoolName">{school}</div>
        <div className="dates">
          {start} - {end}
        </div>
      </div>
    );
  }
}

export default Education;
