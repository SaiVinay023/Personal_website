import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Dialog, DialogTitle, DialogContent, Button } from '@mui/material';

// Data for professional and personal experiences
const experiencesData = {
  professional: [
    {
      title: 'Software Engineer at XYZ Corp',
      summary: 'Worked on backend systems and API development.',
      details: 'Developed scalable backend services using Node.js and PostgreSQL, optimized APIs, and collaborated with cross-functional teams to enhance product delivery.',
      outcome: 'Improved system performance by 20%, enhanced team collaboration.'
    },
    {
      title: 'Intern at ABC Tech',
      summary: 'Worked on frontend using React and Material UI.',
      details: 'Developed UI components for e-commerce web apps, and enhanced the user experience by improving design and responsiveness.',
      outcome: 'Delivered user-friendly UI, improved website traffic by 15%.'
    },
  ],
  personal: [
    {
      title: 'Completed a Marathon',
      summary: 'Trained for and completed a marathon in 2021.',
      details: 'Underwent rigorous training for 6 months, focused on both physical and mental endurance to complete the marathon.',
      outcome: 'Gained self-discipline, improved stamina, and built resilience.'
    },
    {
      title: 'Started a Blog',
      summary: 'Began a personal blog about technology and philosophy.',
      details: 'Wrote articles on AI, robotics, and philosophical perspectives on technology. Gained a small but engaged audience.',
      outcome: 'Improved writing skills, fostered critical thinking.'
    },
  ]
};

const ExperienceCard = ({ experience, handleClick }) => {
  return (
    <Card sx={{ width: '100%', marginBottom: 3, cursor: 'pointer' }} onClick={() => handleClick(experience)}>
      <CardContent>
        <Typography variant="h5" gutterBottom>{experience.title}</Typography>
        <Typography variant="body1">{experience.summary}</Typography>
      </CardContent>
    </Card>
  );
};

const ExperienceDetailsPopup = ({ open, handleClose, experience }) => {
  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>{experience?.title}</DialogTitle>
      <DialogContent>
        <Typography variant="h6">Experience Details</Typography>
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          {experience?.details}
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          Outcome: {experience?.outcome}
        </Typography>
      </DialogContent>
      <Button onClick={handleClose} sx={{ margin: 2 }}>Close</Button>
    </Dialog>
  );
};

const ExperiencesPage = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = (experience) => {
    setSelectedExperience(experience);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ width: '80%', margin: 'auto', paddingTop: 4 }}>
      <Typography variant="h4" sx={{ marginBottom: 4, textAlign: 'center' }}>Experiences</Typography>

      {/* Professional Experiences */}
      <Typography variant="h5" sx={{ marginBottom: 2 }}>Professional Experiences</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {experiencesData.professional.map((experience, index) => (
          <ExperienceCard
            key={index}
            experience={experience}
            handleClick={handleClick}
          />
        ))}
      </Box>

      {/* Personal Experiences */}
      <Typography variant="h5" sx={{ marginTop: 4, marginBottom: 2 }}>Personal Experiences</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {experiencesData.personal.map((experience, index) => (
          <ExperienceCard
            key={index}
            experience={experience}
            handleClick={handleClick}
          />
        ))}
      </Box>

      {/* Experience Details Popup */}
      {selectedExperience && (
        <ExperienceDetailsPopup
          open={open}
          handleClose={handleClose}
          experience={selectedExperience}
        />
      )}
    </Box>
  );
};

export default ExperiencesPage;
