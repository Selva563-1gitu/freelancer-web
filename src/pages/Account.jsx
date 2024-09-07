import React, { useState } from 'react';
import { Container, Grid, Typography, TextField, Button, Paper, Avatar, Divider, Switch, FormControlLabel } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

const Account = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [skills, setSkills] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setProfilePic(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, e.g., updating the profile
    console.log({
      name,
      email,
      password,
      profilePic,
      skills,
      paymentMethod,
      twoFactorAuth,
      notificationsEnabled,
    });
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Account Settings
      </Typography>

      {/* Profile Information Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>Profile Information</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Name"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" component="label" startIcon={<AccountCircle />}>
              Upload Profile Picture
              <input type="file" hidden onChange={handleFileChange} />
            </Button>
            {profilePic && <Avatar src={profilePic} sx={{ mt: 2, width: 56, height: 56 }} />}
          </Grid>
        </Grid>
      </Paper>

      {/* Skills Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>Skills / Services Offered</Typography>
        <TextField
          label="Skills (e.g., Web Development, Graphic Design)"
          fullWidth
          multiline
          rows={3}
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />
      </Paper>

      {/* Payment Information Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>Payment Information</Typography>
        <TextField
          label="Payment Method (e.g., PayPal, Bank Transfer)"
          fullWidth
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
      </Paper>

      {/* Security Settings Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>Security Settings</Typography>
        <FormControlLabel
          control={
            <Switch
              checked={twoFactorAuth}
              onChange={(e) => setTwoFactorAuth(e.target.checked)}
            />
          }
          label="Enable Two-Factor Authentication (2FA)"
        />
      </Paper>

      {/* Notifications Preferences Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>Notification Preferences</Typography>
        <FormControlLabel
          control={
            <Switch
              checked={notificationsEnabled}
              onChange={(e) => setNotificationsEnabled(e.target.checked)}
            />
          }
          label="Enable Notifications"
        />
      </Paper>

      <Divider sx={{ my: 2 }} />
      
      {/* Save Button */}
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Save Changes
      </Button>
    </Container>
  );
};

export default Account;
