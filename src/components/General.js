import React, { useState } from "react";

const General = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const submitted = props.submitted;

  return submitted === false ? (
    <div className="General form">
      <h2>Personal Information</h2>
      <form>
        <label htmlFor="name">Full Name:</label>
        <input
          value={name}
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="Curriculum Vitae"
        />
        <label htmlFor="email">Email:</label>
        <input
          value={email}
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="cv@email.com"
        />
        <label htmlFor="phone">Phone Number:</label>
        <input
          value={phone}
          type="tel"
          id="phone"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="123-456-7890"
        />
      </form>
    </div>
  ) : (
    <div className="general-view">
      <div className="full-name">{name}</div>
      <div className="other-personal">{email}</div>
      <div className="other-personal">{phone}</div>
    </div>
  );
};

export default General;
