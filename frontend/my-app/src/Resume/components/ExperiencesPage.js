import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Dialog, DialogTitle, DialogContent, Button } from '@mui/material';

// Data for professional and personal experiences
const experiencesData = {
  professional: [
  
  
    {
      title: 'Software Developer / Intern at IIT Genoa, AI Lab UNIGE',
      summary: 'Worked on testing and implementing a runtime monitoring framework.',
      details: 'Tested ROS Monitoring, a runtime monitoring framework for ROS systems, integrating RML and a Prolog-based oracle. Employed Python, ROS, ROS 2, Ubuntu, and Docker to validate the framework on the IIT R1 robot.',
      outcome: 'Developed and integrated advanced safety strategies, enhancing human-robot interaction.'
    },
    {
      title: 'Full Stack Developer at Many Designs SRL',
      summary: 'Contributed to business application projects.',
      details: 'Key contributor to the successful implementation of two business application projects. Enhanced user experience and data visualization using various frontend tools and frameworks.',
      outcome: 'Demonstrated adaptability and proactive involvement in diverse Full Stack Development projects.'
    },
    {
      title: 'Software Engineer at Green Project - GP Marketing & Reading Systems',
      summary: 'Developed scalable backend services and optimized APIs.',
      details: 'Developed scalable backend services using Node.js and PostgreSQL, optimized APIs, and collaborated with cross-functional teams to enhance product delivery.',
      outcome: 'Improved system performance by 20%, enhanced team collaboration.'
    },
    {
      title: 'Junior Web Developer at AceTeq Webservices Pvt Ltd',
      summary: 'Built and maintained websites for clients.',
      details: 'Created and tested applications for websites, gathered information, and performed research. Filed reports and created guides to document processes.',
      outcome: 'Maintained business continuity and improved client satisfaction.'
    },
    {
      title: 'Robotics Software Engineer at Avyang Technologies Pvt Ltd',
      summary: 'Designed and prototyped robotics solutions.',
      details: 'Created CAD designs using SOLIDWORKS and CATIA, programmed microcontrollers including Arduino and Raspberry Pi, and led the development of an innovative smart device.',
      outcome: 'Conducted workshops, mentoring over 240 students, fostering a passion for robotics.'
    }
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
