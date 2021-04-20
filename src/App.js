import React from "react";
import Header from "./components/Header";
import General from "./components/General";
import EducationForm from "./components/EducationForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      eduForms: 0,
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

  onSubmitEntry = (e) => {
    e.preventDefault();
    this.setState({
      submitted: !this.state.submitted,
    });
  };

  render() {
    const { submitted } = this.state;
    const extraEduForms = [];
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
        <button onClick={this.onSubmitEntry}>View/Edit CV</button>
      </div>
    );
  }
}

export default App;
