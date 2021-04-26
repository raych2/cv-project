import React from "react";

/*class Education extends React.Component {
  render() {
    const schoolList = this.props.schoolList;
    //const deleteSchool = this.props.deleteSchool;
    return (
      <div className="education-view">
        {schoolList.map((item, index) => {
          return (
            <div key={index} id={index}>
              <div>{item.degree}</div>
              <div>{item.school}</div>
              <div>{item.start}-{item.end}</div>
            </div>
          );
        })}
      </div>
    );
  }
}*/
class Education extends React.Component {
  render() {
    //const schoolList = this.props.schoolList;
    const school = this.props.school;
    const degree = this.props.degree;
    const start = this.props.start;
    const end = this.props.end;
    return (
      <div className="education-view">
            <div className="degree">{degree}</div>
            <div className="schoolName">{school}</div>
            <div className="dates">{start}-{end}</div>
      </div>
    );
  }
}

export default Education;
