import React from 'react';
import { Card, CardContent, Typography, Grid, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '9px',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.05)',
    cursor: 'pointer',
  },
}));

function Home() {
  const categories = [
    {
      title: 'Vegetables',
      image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&q=80',
    },
    {
      title: 'Fruits',
      image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&q=80',
    },
    {
      title: 'Groceries',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80',
    },
  ];

  return (
    <Container sx={{ py: 8 }} maxWidth="lg">
      <Typography 
        variant="h2" 
        component="h1" 
        gutterBottom 
        align="center" 
        sx={{ 
          mb: 8,
          fontWeight: 600,
          color: 'green',
        }}
      >
        Welcome to Our Store
      </Typography>
      <Grid container spacing={4}>
        {categories.map((category) => (
          <Grid item key={category.title} xs={12} sm={6} md={4}>
            <StyledCard sx={{ boxShadow: 3 }}>
              <div style={{ 
                height: 280, 
                backgroundImage: `url(${category.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '6px 6px 0 0'
              }} />
              <CardContent sx={{ textAlign: 'center', py: 3 }}>
                <Typography 
                  variant="h5" 
                  component="h2"
                  sx={{
                    fontWeight: 700,
                    color: 'green',
                    letterSpacing: '0.5px'
                  }}
                >
                  {category.title}
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;