import React from 'react';
import { Container, Typography } from '@mui/material';

const Jobs = () => {
  return (
    <Container sx={{ml:{md:'240px'}}}>
      <Typography variant="h4" gutterBottom>
        Job Listings
      </Typography>
      <Typography variant="body1">
        Browse through available projects and start working with clients today.
      </Typography>
    </Container>
  );
};

export default Jobs;
