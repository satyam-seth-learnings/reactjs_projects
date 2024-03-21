import './App.css'
import { useState } from 'react';

function App() {
  const [joke, setJoke] = useState('');


  const generateBtnClickHandler = async () => {
    const response = await fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single");
    const data = await response.json();
  
    setJoke(data.joke);
  }

  return (
    <>
      <h1>Joke Generator</h1>
      <p>{joke}</p>
      <button onClick={generateBtnClickHandler}>Generate Joke</button>
    </>
  )
}

export default App
