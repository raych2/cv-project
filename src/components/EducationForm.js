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
      schoolList: [],
    };
  }

  handleInputChange = (e) => {
    const input = e.target.id;
    this.setState({
      [input]: e.target.value,
    });
  };

  onSubmitEntry = (e) => {
    e.preventDefault();
    this.setState({
      schoolList: this.state.schoolList.concat([
        this.state.school,
        this.state.degree,
        this.state.start,
        this.state.end,
      ]),
    });
  };

  render() {
    const { schoolList } = this.state;
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
          <button type="submit">
            <i class="far fa-save fa-lg"></i> School
          </button>
        </form>
        <div className="btn-container">
          <button onClick={addSchool}>
            <i className="btn-icon" class="fas fa-plus fa-lg"></i> School
          </button>
          <button onClick={cancelSchool}>
            <i className="btn-icon" class="far fa-trash-alt fa-lg"></i> School
          </button>
        </div>
      </div>
    ) : (
      <Education schoolList={schoolList} />
    );
  }
}

export default EducationForm;
