import React from 'react';
import { Container, Typography, Box, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';

// Sample quotes or sayings you believe in
const aboutMeContent = [
  { quote: "Motivated and ambitious", icon: "🚀" },
  { quote: "Striving to be a better software engineer", icon: "💻" },
  { quote: "Passionate about learning new technologies", icon: "📚" },
  { quote: "Enjoy working on challenging projects", icon: "🏗️" },
  { quote: "Dedicated to personal and professional growth", icon: "🌱" }
];

// Styled container with animated gradient background
const StyledContainer = styled(Container)(({ theme }) => ({
  background: "linear-gradient(135deg, #FFDEE9 0%, #B5FFFC 100%)",
  padding: '50px 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  position: 'relative',
  textAlign: 'center',
}));

// Flip card styles
const FlipCardContainer = styled(Box)(({ theme }) => ({
  perspective: '1000px',
  width: '300px',
  height: '300px',
  margin: '20px',
  position: 'relative',
}));

const FlipCardInner = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  transition: 'transform 0.8s',
  transformStyle: 'preserve-3d',
  position: 'relative',
  '&:hover': {
    transform: 'rotateY(180deg)',
  },
}));

const FlipCardFront = styled(Card)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: theme?.shadows?.[10] || '0px 4px 20px rgba(0, 0, 0, 0.1)', // Fallback added
  borderRadius: '15px',
}));

const FlipCardBack = styled(Card)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
  transform: 'rotateY(180deg)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme?.palette?.primary?.main || '#1976d2', // Fallback added
  color: '#fff',
  boxShadow: theme?.shadows?.[10] || '0px 4px 20px rgba(0, 0, 0, 0.1)', // Fallback added
  borderRadius: '15px',
}));

const AboutMeSection = () => {
  return (
    <StyledContainer>
      <Typography variant="h3" gutterBottom>
        About Me
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {aboutMeContent.map((item, index) => (
          <FlipCardContainer key={index}>
            <FlipCardInner>
              {/* Front Side of Flip Card */}
              <FlipCardFront>
                <CardContent>
                  <Typography variant="h4" component="div">
                    {item.icon}
                  </Typography>
                  <Typography variant="h6">
                    Click to Reveal
                  </Typography>
                </CardContent>
              </FlipCardFront>

              {/* Back Side of Flip Card */}
              <FlipCardBack>
                <CardContent>
                  <Typography variant="body1" component="div">
                    {item.quote}
                  </Typography>
                </CardContent>
              </FlipCardBack>
            </FlipCardInner>
          </FlipCardContainer>
        ))}
      </Box>
    </StyledContainer>
  );
};

export default AboutMeSection;
