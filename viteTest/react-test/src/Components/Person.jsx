import { useState } from "react";

export default function Person() {
  const [person, setPerson] = useState(
    { firstName: 'John',
      lastName : 'Doe',
      age : 100 }
  );

  const handleIncreaseAge = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

  const handleFirstNameChange = e => {
    setPerson({
      ...person,
      firstName: e.target.value
    });
  }

  const handleLastNameChange = e => {
    setPerson({
      ...person,
      lastName: e.target.value
    });
  }


  return (
    <>
      <h1>{person.firstName} {person.lastName}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
      <CustomInput 
        value={person.firstName}
        handleChange={handleFirstNameChange}
        label='First name'
      />
      <CustomInput
        value={person.lastName}
        handleChange={handleLastNameChange}
        label='Last name'
      />
    </>
  );
}

function CustomInput ({ value, handleChange, label='' }) {
  return (
    <label>
      {label}
      <input
        type='text'
        value={value}
        onChange={handleChange}
      />
    </label>
  )
}