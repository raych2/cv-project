import React from "react";
import Header from "./components/Header";
import General from "./components/General";
import EducationForm from "./components/EducationForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
    };
  }

  onSubmitEntry = (e) => {
    e.preventDefault();
    this.setState({
      submitted: !this.state.submitted,
    });
  };

  render() {
    const { submitted } = this.state;
    return (
      <div className="App">
        <Header />
        <General submitted={submitted} />
        <h2>Education</h2>
        <EducationForm submitted={submitted} />
        <button onClick={this.onSubmitEntry}>View/Edit CV</button>
      </div>
    );
  }
}

export default App;
