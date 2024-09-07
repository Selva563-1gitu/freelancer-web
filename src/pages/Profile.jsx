import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import UserProfile from './profiles/userProfile';
import FreelancerProfile from './profiles/FreelancerProfile';
import { Typography } from '@mui/material';

const Profile = ({currentUser}) => {

  // const { currentUser } = useAuth();
 const userRole=(currentUser ? currentUser.role : null); // Assuming `role` is stored in the user object.
  if (!currentUser) {
    return <Typography sx={{ml:{md:'240px'}}}>Loading...</Typography>;
  }

  if (userRole === 'client') {
    return <UserProfile currentUser={currentUser}/>;
  }

  if (userRole === 'freelancer') {
    return <FreelancerProfile currentUser={currentUser}/>;
  }

  return <Typography sx={{ml:{md:'240px'}}}>Unauthorized access. Please register in.</Typography>;
};

export default Profile;
