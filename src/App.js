import React from "react";
import Header from "./components/Header";
import General from "./components/General";
import "./styles/Header.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <General />
      </div>
    );
  }
}

export default App;
