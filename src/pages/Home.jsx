// src/pages/Home.js

import React from 'react';
import { Container, Typography, Grid, Button, Card, CardContent, CardMedia, Box } from '@mui/material';

const Home = () => {
  return (
    <Container sx={{ml:{md:'240px'}}}>
      {/* Hero Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '70vh',
          backgroundImage: 'url("https://source.unsplash.com/random/1600x900?freelance")',
          backgroundSize: 'cover',
          color: '#fff',
          textAlign: 'center',
          mb: 4,
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Find Top Freelancers for Your Business
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Hire talented freelancers to work on your projects at a fair price.
        </Typography>
        <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
          Get Started
        </Button>
      </Box>

      {/* Popular Categories */}
      <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mt: 4 }}>
        Popular Categories
      </Typography>
      <Grid container spacing={4} sx={{ mb: 4 }}>
        {['Web Development', 'Graphic Design', 'Content Writing', 'Digital Marketing'].map((category, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="140"
                image={`https://source.unsplash.com/random/300x200?${category}`}
                alt={category}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h3">
                  {category}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Find top freelancers for {category.toLowerCase()}.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* How It Works */}
      <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mt: 4 }}>
        How It Works
      </Typography>
      <Grid container spacing={4} sx={{ mb: 4 }}>
        {[
          { title: 'Post a Job', description: 'Post your job and wait for proposals.' },
          { title: 'Hire a Freelancer', description: 'Review proposals and hire the best freelancer.' },
          { title: 'Work Together', description: 'Collaborate and work together in real-time.' },
          { title: 'Pay Safely', description: 'Pay only when you are satisfied with the work.' },
        ].map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <CardContent>
                <Typography gutterBottom variant="h6" component="h3">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Featured Freelancers */}
      <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mt: 4 }}>
        Featured Freelancers
      </Typography>
      <Grid container spacing={4} sx={{ mb: 4 }}>
        {['Freelancer 1', 'Freelancer 2', 'Freelancer 3'].map((freelancer, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="140"
                image={`https://source.unsplash.com/random/300x200?person-${index}`}
                alt={freelancer}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h3">
                  {freelancer}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Highly rated {freelancer.toLowerCase()} available for your project.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Testimonials */}
      <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mt: 4 }}>
        What Our Users Say
      </Typography>
      <Grid container spacing={4} sx={{ mb: 4 }}>
        {[
          { name: 'John Doe', feedback: 'Great platform to find skilled freelancers quickly!' },
          { name: 'Jane Smith', feedback: 'Helped me scale my business with top talent.' },
          { name: 'Chris Lee', feedback: 'Efficient and reliable, highly recommend!' },
        ].map((testimonial, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <CardContent>
                <Typography gutterBottom variant="h6" component="h3">
                  {testimonial.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  "{testimonial.feedback}"
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
