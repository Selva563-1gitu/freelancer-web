import React from 'react';
import { Container, Typography } from '@mui/material';

const Settings = () => {
  return (
    <Container sx={{ml:{md:'240px'}}}>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <Typography variant="body1">
        Customize your account settings and preferences.
      </Typography>
    </Container>
  );
};

export default Settings;
