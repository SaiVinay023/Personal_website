import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Dialog, DialogTitle, DialogContent, Button } from '@mui/material';

// Data for each year
const yearData = [
  {
    year: '8th Standard',
    work: 'Participated in science fair, learned basics of programming (HTML/CSS).',
    learned: 'Developed presentation skills, understood basic algorithms.',
    toBeLearned: 'Start learning JavaScript.'
  },
  {
    year: '9th Standard',
    work: 'Worked on school projects, explored robotics.',
    learned: 'Learned Python basics, fundamentals of robotics.',
    toBeLearned: 'Deepen knowledge in Python and start with microcontrollers.'
  },
  {
    year: '8th Standard',
    work: 'Participated in science fair, learned basics of programming (HTML/CSS).',
    learned: 'Developed presentation skills, understood basic algorithms.',
    toBeLearned: 'Start learning JavaScript.'
  },
  {
    year: '9th Standard',
    work: 'Worked on school projects, explored robotics.',
    learned: 'Learned Python basics, fundamentals of robotics.',
    toBeLearned: 'Deepen knowledge in Python and start with microcontrollers.'
  },
  {
    year: '8th Standard',
    work: 'Participated in science fair, learned basics of programming (HTML/CSS).',
    learned: 'Developed presentation skills, understood basic algorithms.',
    toBeLearned: 'Start learning JavaScript.'
  },
  {
    year: '9th Standard',
    work: 'Worked on school projects, explored robotics.',
    learned: 'Learned Python basics, fundamentals of robotics.',
    toBeLearned: 'Deepen knowledge in Python and start with microcontrollers.'
  },
  {
    year: '8th Standard',
    work: 'Participated in science fair, learned basics of programming (HTML/CSS).',
    learned: 'Developed presentation skills, understood basic algorithms.',
    toBeLearned: 'Start learning JavaScript.'
  },
  {
    year: '9th Standard',
    work: 'Worked on school projects, explored robotics.',
    learned: 'Learned Python basics, fundamentals of robotics.',
    toBeLearned: 'Deepen knowledge in Python and start with microcontrollers.'
  },
  // Add more years as needed...
];

const YearCard = ({ yearInfo, handleClick }) => {
  return (
    <Card sx={{ width: '100%', marginBottom: 3, cursor: 'pointer' }} onClick={() => handleClick(yearInfo)}>
      <CardContent>
        <Typography variant="h5" gutterBottom>{yearInfo.year}</Typography>
        <Typography variant="body1">Work: {yearInfo.work}</Typography>
        <Typography variant="body1">Learned: {yearInfo.learned}</Typography>
        <Typography variant="body1">To be learned: {yearInfo.toBeLearned}</Typography>
      </CardContent>
    </Card>
  );
};

const YearDetailsPopup = ({ open, handleClose, yearInfo }) => {
  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>{yearInfo?.year}</DialogTitle>
      <DialogContent>
        <Typography variant="h6">Detailed Learnings</Typography>
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          Work: {yearInfo?.work}
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          Learned: {yearInfo?.learned}
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          To Be Learned: {yearInfo?.toBeLearned}
        </Typography>
      </DialogContent>
      <Button onClick={handleClose} sx={{ margin: 2 }}>Close</Button>
    </Dialog>
  );
};

const AchievementsPage = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = (yearInfo) => {
    setSelectedYear(yearInfo);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ width: '60%', margin: 'auto', paddingTop: 4 }}>
      <Typography variant="h4" sx={{ marginBottom: 4, textAlign: 'center' }}>Yearly Achievements</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxHeight: '2000vh', overflowY: 'scroll' }}>
        {yearData.map((yearInfo, index) => (
          <YearCard key={index} yearInfo={yearInfo} handleClick={handleClick} />
        ))}
      </Box>
      
      {selectedYear && (
        <YearDetailsPopup open={open} handleClose={handleClose} yearInfo={selectedYear} />
      )}
    </Box>
  );
};

export default AchievementsPage;
