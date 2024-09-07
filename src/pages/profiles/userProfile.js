import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext.js';
import { auth } from '../../firebase';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { Typography, Container, Button, List, ListItem } from '@mui/material';

const db = getFirestore();

const UserProfile = ({currentUser}) => {
  // const { currentUser } = useAuth();
  const [clientData, setClientData] = useState({
    name: 'default_user',
    companyName: 'company_name',
    email:'xyz@gmail.com',
    postedJobs: [{title:'parttime_job'},{title: 'internship'}],
  });

  // useEffect(() => {
  //   const fetchClientData = async () => {
  //     if (currentUser) {
  //       const clientRef = doc(db, 'users', currentUser.uid);
  //       const clientSnap = await getDoc(clientRef);
  //       if (clientSnap.exists()) {
  //         setClientData(clientSnap.data());
  //       }
  //     }
  //   };
  //   fetchClientData();
  // }, [currentUser]);
  useEffect(() => {
    setClientData(currentUser);
  },[]);
  if (!clientData) return <Typography>Loading...</Typography>;

  return (
    <Container sx={{ml:{md:'240px'}}}>
      <Typography variant="h4">Client Profile</Typography>
      <Typography variant="h6">Name: {clientData.name}</Typography>
      <Typography variant="h6">Company: {clientData.companyName}</Typography>
      <Typography variant="h6">Email: {clientData.email}</Typography>
      <Typography variant="h6">Posted Jobs:</Typography>
      <List>
        {clientData.postedJobs && clientData.postedJobs.map((job, index) => (
          <ListItem key={index}>{job.title}</ListItem>
        ))}
      </List>
      <Button variant="contained" color="primary">Edit Profile</Button>
    </Container>
  );
};

export default UserProfile;
