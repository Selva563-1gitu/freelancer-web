import React, { useContext, useState } from 'react';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword, signInWithPopup ,GoogleAuthProvider, signInAnonymously, signInWithRedirect} from 'firebase/auth';
import { Container, TextField, Button, Typography } from '@mui/material';
import { useAuth } from '../../contexts/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful');
    } catch (err) {
      setError(err.message);
    }
  };
  const googleHandler=async(e)=>{
    const provider=new GoogleAuthProvider();
    await signInWithRedirect(auth,provider);
    alert('Google Sign In successful');
  }
  const currentUser=useAuth();
  const loginsample=(e)=>{
    let user={email:email,pass:password};
    currentUser.setCurrentUser(user);
  }
  return (
    <Container maxWidth="xs">
      <Typography variant="h4" gutterBottom>Login</Typography>
      {error && <Typography color="error">{error}</Typography>}
      <TextField label="Email" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} margin="normal" />
      <TextField label="Password" type="password" fullWidth value={password} onChange={(e) => setPassword(e.target.value)} margin="normal" />
      <Button variant="contained" color="primary" onClick={loginsample} fullWidth>Login</Button>
      <Typography sx={{my:"20px",width:"fullScreen",justifySelf:"center"}}>--or--</Typography>
      <Button onClick={loginsample}>Sign in with google</Button>
    </Container>
  );
};

export default Login;
