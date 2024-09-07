import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext.js';
import { auth } from '../../firebase';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { Typography, Container, Button, List, ListItem } from '@mui/material';

const db = getFirestore();

const FreelancerProfile = ({currentUser}) => {
  const [freelancerData,setFreelancerData]=useState({
    name: 'default_name',
    skills: ['web_developer','web-design','production'],
    hourlyRate: 100,
    portfolio: ['react_app','user_friendly_navigation','user_friendly_portfolio']
  });
  // const { currentUser } = useAuth();
  // const [freelancerData, setFreelancerData] = useState(null);

  // useEffect(() => {
  //   const fetchFreelancerData = async () => {
  //     if (currentUser) {
  //       const freelancerRef = doc(db, 'users', currentUser.uid);
  //       const freelancerSnap = await getDoc(freelancerRef);
  //       if (freelancerSnap.exists()) {
  //         setFreelancerData(freelancerSnap.data());
  //       }
  //     }
  //   };
  //   fetchFreelancerData();
  // }, [currentUser]);
  useEffect(() => {
    setFreelancerData(currentUser);
  },[]);
  if (!freelancerData) return <Typography>Loading...</Typography>;

  return (
    <Container sx={{ml:{md:'240px'}}}>
      <Typography variant="h4">Freelancer Profile</Typography>
      <Typography variant="h6">Name: {freelancerData.name}</Typography>
      <Typography variant="h6">Skills: {freelancerData.skills.join(', ')}</Typography>
      <Typography variant="h6">Hourly Rate: ${freelancerData.hourlyRate}</Typography>
      <Typography variant="h6">Portfolio:</Typography>
      <List>
        {freelancerData.portfolio && freelancerData.portfolio.map((project, index) => (
          <ListItem key={index}>{project.title}</ListItem>
        ))}
      </List>
      <Button variant="contained" color="primary">Edit Profile</Button>
    </Container>
  );
};

export default FreelancerProfile;
