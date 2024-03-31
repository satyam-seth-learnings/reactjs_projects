import './App.css'
import { useState } from 'react';

function App() {
  const [validationMsg, setValidationMsg] = useState('');

  const validate = (e) => {
    if(e.target.value === '') {
      setValidationMsg('');
    }
    else if(e.target.value.length > 1) {
      setValidationMsg('strong');
    } else {
      setValidationMsg('week');
    }
  }

  return (
    <>
      <h1>Check your password strength</h1>
      <input style={{fontSize: '1.5rem'}} type="text" name="password" id="password" onChange={validate}/>
      <p>{validationMsg}</p>
    </>
  );
}

export default App;
