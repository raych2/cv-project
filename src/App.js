import React from "react";
import Header from "./components/Header";
import General from "./components/General";

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
        <form onSubmit={this.onSubmitEntry}>
          <General submitted={submitted} />
          <button type="submit">View/Edit CV</button>
        </form>
      </div>
    );
  }
}

export default App;
