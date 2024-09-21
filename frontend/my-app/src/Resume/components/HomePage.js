import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, Grid, Dialog, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// Card component with colors and hover effects
const FloatingCard = ({ title, description, floatDirection, onClick }) => {
  return (
    <Box
      sx={{
        width: '100%',
        float: floatDirection,
        marginBottom: 3,
        position: 'relative',
        animation: `slideInFrom${floatDirection.charAt(0).toUpperCase() + floatDirection.slice(1)} 1s ease`,
        cursor: 'pointer',
        '&:hover': {
          transform: 'scale(1.05)',
          transition: 'transform 0.3s ease',
        },
      }}
      onClick={onClick}
    >
      <Card
        sx={{
          width: '90%',
          background: floatDirection === 'left' ? 'linear-gradient(135deg, #f3ec78, #af4261)' : 'linear-gradient(135deg, #43cea2, #185a9d)',
          color: '#fff',
          borderRadius: 2,
        }}
      >
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1">{description}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

const HomePageCards = () => {
  const [open, setOpen] = useState(false);
  const [currentPopup, setCurrentPopup] = useState({});

  const data = [
    {
      leftCard: { title: 'Strengths', description: 'Problem-solving, technical skills, adaptability.', popupDetail: 'I possess strong problem-solving abilities, complemented by solid technical skills and adaptability. These strengths enable me to tackle challenges effectively and embrace new opportunities.' },
      rightCard: { title: 'Weaknesses', description: 'Perfectionism, overthinking, time management challenges.', popupDetail: 'On the flip side, I sometimes struggle with perfectionism and overthinking, which can lead to time management challenges. However I am continuously working to improve these areas.' },
    },
    {
      leftCard: { title: 'Work Modality', description: 'Prefers agile methodologies and collaboration.', popupDetail: 'In terms of work modality, I thrive in agile environments that prioritize collaboration and flexibility. This approach allows me to be responsive to changing needs and fosters team synergy.' },
      rightCard: { title: 'Culture Fit', description: 'Proactive, team-oriented, embraces diversity.', popupDetail: 'Culturally, I am proactive and team-oriented, and I wholeheartedly embrace diversity. I believe that a diverse team enriches our collective creativity and effectiveness..' },
    },
  ];

  const handleOpenPopup = (popupData) => {
    setCurrentPopup(popupData);
    setOpen(true);
  };

  const handleClosePopup = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ padding: 4, background: 'linear-gradient(to right, #e66465, #9198e5)', minHeight: '100vh' }}>
      <Grid container spacing={4}>
        {data.map((row, index) => (
          <Grid container item xs={12} key={index}>
            <Grid item xs={6}>
              <FloatingCard
                title={row.leftCard.title}
                description={row.leftCard.description}
                floatDirection="left"
                onClick={() => handleOpenPopup(row.leftCard)}
              />
            </Grid>
            <Grid item xs={6}>
              <FloatingCard
                title={row.rightCard.title}
                description={row.rightCard.description}
                floatDirection="right"
                onClick={() => handleOpenPopup(row.rightCard)}
              />
            </Grid>
          </Grid>
        ))}
      </Grid>

      {/* Centered content about the workplace you're looking for */}
      <Box sx={{ marginTop: 5, textAlign: 'center', maxWidth: '900px', margin: 'auto', padding: 2 }}>
        <Typography variant="h4" gutterBottom sx={{ color: '#fff' }}>
        I’m an ambitious and driven individual who values continuous learning and personal growth. I’m always eager to expand my knowledge and improve my skills, approaching challenges with a focus on creativity and out-of-the-box thinking. I enjoy working in environments where I can make meaningful contributions, leveraging my focus and dedication to achieve results.
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#f0f0f0' }}>
        About Me

Reasoning Ability

Drive

Team Spirit

Proficiency in English

Team Management

</Typography>
        <Typography variant="h5" gutterBottom sx={{ color: '#fff' }}>
         
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#f0f0f0' }}>
          <strong>Reasoning ability:</strong> I approach problems by thinking from first principles, structuring ideas carefully, and avoiding assumptions. I enjoy solving complex problems by paying attention to the details that truly matter, and I’m always open to exploring new ideas that can make a difference.
          </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#f0f0f0' }}>
          <strong>Drive:</strong> I’m naturally ambitious and take initiative in my work. I hold myself to a high standard and am committed to improving with each project. I take pride in putting forth consistent effort, while also staying adaptable to change and growth.
          </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#f0f0f0' }}>
          <strong>Team spirit:</strong> I believe in supporting the best ideas and working collaboratively. I’m honest, transparent, and always ready to assist others. I enjoy being socially engaging, contributing to a positive team dynamic, and helping create an environment where everyone can succeed.
          </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#f0f0f0' }}>
          <strong>Proficiency in English:</strong> I’m proficient in reading, writing, and speaking English, which allows me to communicate effectively across diverse professional settings. I value clear communication and strive to express my ideas in a way that fosters teamwork and mutual understanding.

        </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#f0f0f0' }}>
          <strong>Team Management
          :</strong> I’m proficient in reading, writing, and speaking English, which allows me to communicate effectively across diverse professional settings. I value clear communication and strive to express my ideas in a way that fosters teamwork and mutual understanding.

        </Typography>
      </Box>

      {/* Popup dialog for details */}
      <Dialog open={open} onClose={handleClosePopup}>
        <DialogContent sx={{ padding: 4, width: '500px', maxWidth: '90vw', maxHeight: '90vh' }}>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClosePopup}
            aria-label="close"
            sx={{ position: 'absolute', top: 10, right: 10 }}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h4" gutterBottom>
            {currentPopup.title}
          </Typography>
          <Typography variant="body1" sx={{ whiteSpace: 'pre-line', overflowY: 'auto', maxHeight: '70vh' }}>
            {currentPopup.popupDetail}
          </Typography>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

// Keyframes for animations
const styles = `
@keyframes slideInFromLeft {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInFromRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
`;

const HomePage = () => {
  return (
    <>
      <style>{styles}</style>
      <HomePageCards />
    </>
  );
};

export default HomePage;
