import React from "react";

class Education extends React.Component {
  render() {
    const schoolList = this.props.schoolList;
    return (
      <div className="view">
        {schoolList.map((school, index) => {
          return (
            <div key={index} id={index}>
              {school}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Education;
