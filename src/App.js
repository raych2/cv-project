import React from "react";
import Header from "./components/Header";
import General from "./components/General";
import Education from "./components/Education";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <General />
        <Education />
      </div>
    );
  }
}

export default App;
