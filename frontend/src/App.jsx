import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const {file, setFile} = useState();
  
  return (
    <div>
      <form onSubmit={} encType='multipart/form-data'>
        <label>First Name</label>
        <input type='text' name='firstName' required/>
        <label>Last Name</label>
        <input type='text' name='lastName' required/>
        <label>Middle Name</label>
        <input type='text' name='middleName'/>
        <label>Email Name</label>
        <input type='email' name='email' required/>
        <label>Phone Number</label>
        <input type='number' name='phoneNumber'/>
        <label>Upload Photo</label>
        <input type='text' name='firstName'/>
      </form>
    </div>
  )
}

export default App
