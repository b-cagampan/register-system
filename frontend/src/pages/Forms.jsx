import React, { useState } from 'react'
import InputFields from '../components/InputFields';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Forms() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [image, setImage] = useState(null);
    const [errorMsg, setErrorMsg] = useState('');

    const nav = useNavigate();

    const handleImageChange = (event) => {
        //updates new image
        setImage(event.target.files[0]);
    };

    const formData = new FormData();
   
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('middleName', middleName);
    formData.append('email', email);
    formData.append('phoneNumber', phoneNumber);
    formData.append('image', image)
     
    const handleSubmit = async (event) => {
        event.preventDefault();
   
        try 
        {
            const response = await axios.post('http://localhost:4000/api/auth/register', formData, {
                headers: {
                    "Content-Type" : 'multipart/form-data',
                }
            });

            nav('/auth');
   
        } catch (err) {
            if (err.response && err.response.status === 400) {
                //Get error message from the response
                setErrorMsg(err.response.data.error); 
            } else {
                setErrorMsg(err.message);
            }
        }
    }

  return (
    <div className="flex justify-center items-center max-w-md mx-auto mt-10 bg-white rounded-lg border border-gray-300 p-5">
        <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <InputFields label="First Name" type="text" name="firstName" onChange={(event) => setFirstName(event.target.value)} isRequired={true}/>
            <InputFields label="Last Name" type="text" name="lastName" onChange={(event) => setLastName(event.target.value)} isRequired={true}/>
            <InputFields label="Middle Name" type="text" name="middleName" onChange={(event) => setMiddleName(event.target.value)}/>
            <InputFields label="Email" type="email" name="email" onChange={(event) => setEmail(event.target.value)} isRequired={true}/>
            <InputFields label="Phone Number" type="number" name="phoneNumber" onChange={(event) => setPhoneNumber(event.target.value)} isRequired={true}/>
            <InputFields label="Upload Photo" type="file" name="image" onChange={handleImageChange} isRequired={true}/>

            <button type="submit" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-auto block mb-2 ">Submit</button>
        </form>
        {errorMsg && <p className="mt-2 text-l text-red-600 dark:text-red-400">{errorMsg}</p>}
    </div>
  )
}
