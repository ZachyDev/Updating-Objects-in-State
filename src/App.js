import React, { useState } from "react";

export default function App() {
  const [person, setPerson] = useState({
    firstName: "Zachy",
    lastName: "Moseti",
    email: "mosetizachary001@gmail.com"
  });
  const handleFirstNameChange = (e) => {
    setPerson({
      ...person,
      firstName: e.target.value
    });
  };
  const handleLastNameChange = (e) => {
    setPerson({
      ...person,
      lastName: e.target.value
    });
  };
  const handleEmailChange = (e) => {
    setPerson({
      ...person,
      email: e.target.value
    });
  };
  return (
    <div className="App">
      <label>
        firstName:
        <input
          type="text"
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        lastName:
        <input
          type="text"
          value={person.lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <label>
        email:
        <input type="email" value={person.email} onChange={handleEmailChange} />
      </label>
      <p>{person.firstName}</p>
      <p>{person.lastName}</p>
      <p>{person.email}</p>
    </div>
  );
}
