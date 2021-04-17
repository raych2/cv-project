import React from "react";

class General extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
    };
  }

  handleInputChange = (e) => {
    const input = e.target.id;
    this.setState({
      [input]: e.target.value,
    });
  };

  render() {
    const submitted = this.props.submitted;
    return submitted === false ? (
      <div className="General form">
        <div>Personal Information</div>
        <form>
          <label htmlFor="name">Full Name:</label>
          <input
            value={this.state.name}
            type="text"
            id="name"
            onChange={this.handleInputChange}
            placeholder="Christine V"
          />
          <label htmlFor="email">Email:</label>
          <input
            value={this.state.email}
            type="email"
            id="email"
            onChange={this.handleInputChange}
            placeholder="cv@email.com"
          />
          <label htmlFor="phone">Phone Number:</label>
          <input
            value={this.state.phone}
            type="tel"
            id="phone"
            onChange={this.handleInputChange}
            placeholder="123-456-7890"
          />
        </form>
      </div>
    ) : (
      <div className="General view">
        <div className="full-name">{this.state.name}</div>
        <div className="other-personal">{this.state.email}</div>
        <div className="other-personal">{this.state.phone}</div>
      </div>
    );
  }
}

export default General;
