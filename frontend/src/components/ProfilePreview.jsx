import React from 'react'
import { Link } from 'react-router-dom'

export default function ProfilePreview({previewProfile, profilePicture}) {
  return (
    <div className="max-w-2xl mx-auto rounded-lg border border-gray-300 flex justify-center items-center w-screen h-screen">
      <div className="px-3 py-2">
        <div className="flex flex-col gap-1 text-center">
          <img src={'http://localhost:4000/Images/' + profilePicture} className="block mx-auto bg-center bg-no-repeat bg-cover w-20 h-20 rounded-full border border-gray-400 shadow-lg"/>
          <p className="font-serif font-semibold">{previewProfile.firstName} {previewProfile.lastName} {previewProfile.middleName}</p>
          <span className="text-sm text-gray-400">{previewProfile.email} | {previewProfile.phoneNumber}</span>
        </div>
        <div className="flex flex-col gap-1 text-center">
          <p className='text-green-600'>Successfully Registered</p>
          <Link to='/' className='my-5 text-blue-600 underline underline-offset-1'>Return to Home</Link>
        </div>
      </div>
    </div>
  )
}
