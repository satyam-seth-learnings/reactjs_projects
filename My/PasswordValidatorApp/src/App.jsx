import './App.css'
import { useState } from 'react';
import validator from 'validator';

function App() {
  const [validity, setValidity] = useState(false);

  const validate = (e) => {
    const {value} = e.target;

    if(value === '') {
      setValidity('');
    }
    else if(validator.isStrongPassword(value, { 
      minLength: 8, minLowercase: 1, 
      minUppercase: 1, minNumbers: 1, minSymbols: 1 
  })) {
      setValidity(true);
    } else {
      setValidity(false);
    }
  }

  return (
    <>
      <h1>Check your password strength</h1>
      <label style={{fontSize: '1.5rem', marginRight: '0.5rem'}} htmlFor="password">Password:</label>
      <input style={{fontSize: '1.5rem'}} type="text" name="password" id="password" onChange={validate}/>
      {validity=== true ? <p style={{color: 'MediumSeaGreen'}}>Strong Password</p> : <p style={{color: 'Tomato'}}>Week Password</p>}
    </>
  );
}

export default App;
