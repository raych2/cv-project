import React from "react";

class General extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      submitted: false,
    };
  }

  handleInputChange = (e) => {
    const input = e.target.id;
    this.setState({
      [input]: e.target.value,
    });
  };

  handleEdit = (e) => {
    this.setState({
      submitted: false,
    });
  };

  onSubmitEntry = (e) => {
    e.preventDefault();
    this.setState({
      submitted: !this.state.submitted,
    });
  };

  render() {
    return this.state.submitted === false ? (
      <div className="General form">
        <form onSubmit={this.onSubmitEntry}>
          <input
            value={this.state.name}
            type="text"
            id="name"
            onChange={this.handleInputChange}
            placeholder="Full Name"
          />
          <input
            value={this.state.email}
            type="email"
            id="email"
            onChange={this.handleInputChange}
            placeholder="Email Address"
          />
          <input
            value={this.state.phone}
            type="tel"
            id="phone"
            onChange={this.handleInputChange}
            placeholder="Phone Number"
          />
          <button type="submit">View</button>
        </form>
      </div>
    ) : (
      <div className="General view">
        <div className="full-name">{this.state.name}</div>
        <div className="other-personal">{this.state.email}</div>
        <div className="other-personal">{this.state.phone}</div>
        <button onClick={this.handleEdit}>Edit</button>
      </div>
    );
  }
}

export default General;
