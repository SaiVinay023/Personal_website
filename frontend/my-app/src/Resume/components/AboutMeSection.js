import React from 'react';
import { Container, Typography, Box, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';

// Sample quotes or sayings you believe in
const aboutMeContent = [
  { quote: "Driven by curiosity and creativity", icon: "🧠", emoji: "" },
{ quote: "Aiming for excellence in every project", icon: "🏅", emoji: "" },
{ quote: "Collaborative and team-oriented", icon: "🤝", emoji: "" },
{ quote: "Committed to continuous improvement", icon: "🔧", emoji: "" },
{ quote: "Focused on delivering high-quality results", icon: "🎯", emoji: "" },
{ quote: "Embracing innovation and change", icon: "⚙️", emoji: "" },
{ quote: "Thriving in dynamic environments", icon: "🌪️", emoji: "" },
{ quote: "Detail-oriented and organized", icon: "🗂️", emoji: "" },
{ quote: "Resilient and adaptable under pressure", icon: "💪", emoji: "" },
{ quote: "Building solutions with a purpose", icon: "🔨", emoji: "" },
{ quote: "Inspired by challenges and complex problems", icon: "🧩", emoji: "" },
{ quote: "Fuelled by passion and persistence", icon: "🔥", emoji: "" },
{ quote: "Eager to learn and grow every day", icon: "🌟", emoji: "" },
{ quote: "Solving problems with creativity and logic", icon: "🧑‍🔬", emoji: "" },
{ quote: "Always pushing the limits of what's possible", icon: "🚀", emoji: "" }

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
    //transform: 'rotateY(180deg)',
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
                    {item.quote}
                  </Typography>
                  <Typography variant="h6">
                  </Typography>
                </CardContent>
              </FlipCardFront>

              {/* Back Side of Flip Card 
              <FlipCardBack>
                <CardContent>
                  <Typography variant="body1" component="div">
                    {item.quote}
                  </Typography>
                </CardContent>
              </FlipCardBack> */}
            </FlipCardInner>
          </FlipCardContainer>  
        ))}
      </Box>
    </StyledContainer>
  );
};

export default AboutMeSection;
