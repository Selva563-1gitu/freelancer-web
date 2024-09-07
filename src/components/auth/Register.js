import React, { useState } from 'react';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, setDoc, doc } from 'firebase/firestore';
import { Container, TextField, Button, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useAuth } from '../../contexts/AuthContext';

const db = getFirestore();

const Register = ({setCurrentUser}) => {
  const[name,setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('freelancer'); // Default role
  const [error, setError] = useState('');

  // const handleRegister = async () => {
  //   try {
  //     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  //     const user = userCredential.user;
  //     // Save user role in Firestore
  //     await setDoc(doc(db, 'users', user.uid), {
  //       email: user.email,
  //       role,
  //       name: '',
  //       companyName: role === 'client' ? '' : undefined,
  //       skills: role === 'freelancer' ? [] : undefined,
  //       portfolio: role === 'freelancer' ? [] : undefined,
  //       postedJobs: role === 'client' ? [] : undefined,
  //     });
  //     alert('Registration successful');
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };
  // let currentUser=useAuth();
  const loginsample=async(e)=>{
    let user={name:name,email:email,pass:password,role:role,companyName: role === 'client' ? '' : undefined,
      skills: role === 'freelancer' ? [] : undefined,
      portfolio: role === 'freelancer' ? [] : undefined,
      postedJobs: role === 'client' ? [] : undefined};
      await setCurrentUser(user);
  }
  return (
    <Container maxWidth="xs">
      <Typography variant="h4" gutterBottom>Register</Typography>
      {error && <Typography color="error">{error}</Typography>}
      <TextField label="Name" fullWidth value={name} onChange={(e) => setName(e.target.value)} margin="normal" />
      <TextField label="Email" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} margin="normal" />
      <TextField label="Password" type="password" fullWidth value={password} onChange={(e) => setPassword(e.target.value)} margin="normal" />
      <FormControl fullWidth margin="normal">
        <InputLabel>Role</InputLabel>
        <Select value={role} onChange={(e) => setRole(e.target.value)}>
          <MenuItem value="freelancer">Freelancer</MenuItem>
          <MenuItem value="client">Client</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" onClick={loginsample} fullWidth>Register</Button>
    </Container>
  );
};

export default Register;
