import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('')
  const [name, setName] = useState('')
  const [touched, setTouched] = useState(false)
  const [valid, setValid] = useState(false)

  useEffect(() => {
    setValid(value.length <= 18)
  }, [value]);

  return (
    <div className="container">

      <form onSubmit={e => {
        e.preventDefault()
        const isValid = touched && valid
        if (isValid) { 
           setName(value) 
        }
        }}>

        <input type="text" value={value} onChange={e => {
            setTouched(true)
            setValue(e.target.value)
          }
        }/>

     </form>
     <p>My name is : {value}</p>
     <p>Your name is : {name}</p>

     <p className={`small ${!valid? 'highlight': ''}`}>Max of 18 characters</p>
    </div>  
  );
}

export default App;
