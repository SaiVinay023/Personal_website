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
      leftCard: { title: 'Strengths', description: 'Problem-solving, technical skills, adaptability.', popupDetail: 'Full details about Strengths.' },
      rightCard: { title: 'Weaknesses', description: 'Perfectionism, overthinking, time management challenges.', popupDetail: 'Full details about Weaknesses.' },
    },
    {
      leftCard: { title: 'Work Modality', description: 'Prefers agile methodologies and collaboration.', popupDetail: 'Details on Work Modality.' },
      rightCard: { title: 'Culture Fit', description: 'Proactive, team-oriented, embraces diversity.', popupDetail: 'Details on Culture Fit.' },
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
          What I’m Looking for in a Workplace
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#f0f0f0' }}>
          Work closely with other software engineers to expand our set of libraries and make our processes ever-more efficient.
          Learn about the latest and greatest technologies, testing the promising ones to make sure we don’t miss out on game-changing opportunities to boost our productivity and the enjoyment of our work.
          Constantly improve the quality of our products, tools, or infrastructures by fixing bugs and refactoring the code base where necessary.
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ color: '#fff' }}>
          What I Value
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#f0f0f0' }}>
          <strong>Reasoning ability:</strong> Given the necessary knowledge, you can solve complex problems. You think from first principles, structure your ideas sharply, and resist biases. You identify and take care of the details that matter.
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#f0f0f0' }}>
          <strong>Drive:</strong> You’re extremely ambitious and your initiative, effort, and tenacity match the intensity of your ambition. You feel deeply responsible for your work and hold yourself to a high—and rising—standard.
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#f0f0f0' }}>
          <strong>Team spirit:</strong> You support the best idea, not just your idea. You’re always happy to help your team and are reliable, honest, and transparent.
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#f0f0f0' }}>
          <strong>Proficiency in English:</strong> You read, write, and speak proficiently in English.
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
