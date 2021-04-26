import React from "react";
import Education from "./Education";

class EducationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      school: "",
      degree: "",
      start: "",
      end: "",
    };
  }

  handleInputChange = (e) => {
    const input = e.target.id;
    this.setState({
      [input]: e.target.value,
    });
  };

  render() {
    const { school, degree, start, end} = this.state;
    const submitted = this.props.submitted;
    const addSchool = this.props.addSchool;
    const cancelSchool = this.props.cancelSchool;
    return submitted === false ? (
      <div className="Education form">
        <form onSubmit={this.onSubmitEntry}>
          <label htmlFor="school">University:</label>
          <input
            value={this.state.school}
            type="text"
            id="school"
            onChange={this.handleInputChange}
            placeholder="UC San Diego"
          />
          <label htmlFor="degree">Degree:</label>
          <input
            value={this.state.degree}
            type="text"
            id="degree"
            onChange={this.handleInputChange}
            placeholder="BSc Biochemistry"
          />
          <label htmlFor="start">Start Date:</label>
          <input
            value={this.state.start}
            type="text"
            id="start"
            onChange={this.handleInputChange}
            placeholder="September 2015"
          />
          <label htmlFor="end">End Date:</label>
          <input
            value={this.state.end}
            type="text"
            id="end"
            onChange={this.handleInputChange}
            placeholder="June 2019"
          />
        </form>
        <div className="btn-container">
          <button onClick={addSchool}>
            <i className="btn-icon" class="fas fa-plus fa-lg"></i> School
          </button>
          <button onClick={cancelSchool}>
            <i class="far fa-trash-alt fa-lg"></i> Form
          </button>
        </div>
      </div>
    ) : (
      <Education school={school} degree={degree} start={start} end={end}/>
    );
  }
}

export default EducationForm;
