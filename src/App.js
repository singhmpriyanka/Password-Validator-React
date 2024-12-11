import { useState } from 'react';
import './App.css';
import validator from 'validator';

function App() {
  const [errMsg, seterrMsg] = useState('')
  const [borderColor, setBorderColor] = useState('');
  function validate(val) {
    if (validator.isStrongPassword(val, {
      minUppercase: 1, minLowercase: 1, minSymbols: 1, minLength: 5, minNumbers: 1
    })) {
      seterrMsg('Is strong password')
      setBorderColor('green');
    } else {
      seterrMsg('Is not a strong password')
      setBorderColor('red');
    }
  }
  return (
    <>
      <div className='App'>Password Validator</div>
      <p className='Para'>
        <h>Enter password: </h>
        <input type='text' onChange={(e) => validate(e.target.value)} style={{ borderColor: borderColor, borderWidth: '4px', padding: '10px' }}></input>
        <br />
        <span style={{ color: borderColor }}>{errMsg}</span>
      </p>
    </>
  )
}

export default App;