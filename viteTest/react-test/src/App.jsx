// import { useState } from 'react'
import './App.css';
import Person from './Components/Person';

function App() {
  return (
    <>
      <Person />
      <p>
        Goodbye cruel world!
      </p>
      <AllThePeople />
    </>
  )
}

function AllThePeople () {
  return <h1>
    &quot;Goodbye all the people, there's nothing you can say to make me change my mind&quot;
  </h1>
}

export default App
