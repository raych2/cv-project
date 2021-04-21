import React from "react";

class Experience extends React.Component {
  render() {
    const jobList = this.props.jobList;
    return (
      <div className="view">
        {jobList.map((job, index) => {
          return (
            <div key={index} id={index}>
              {job}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Experience;