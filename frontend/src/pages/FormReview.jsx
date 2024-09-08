import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading';
import ProfilePreview from '../components/ProfilePreview';

export default function FormReview({user}) {
    const[isLoading, setIsLoading] = useState(true);
    const[previewProfile, setPreviewProfile] = useState();
    const[previewProfilePicture, setPreviewProfilePicture] = useState();


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:4000/api/auth/profile');
            console.log(response.data);

            setIsLoading(false);
            setPreviewProfile(response.data.profile);
            setPreviewProfilePicture(response.data.profilePicture);

          } catch (error) {
            console.error(error);
          }
        }
        fetchData();
    }, []);
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <ProfilePreview previewProfile={previewProfile} profilePicture={previewProfilePicture} />
      )}
    </div>
  )
}
