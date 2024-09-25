import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Button, Dialog, DialogContent, IconButton } from '@mui/material';
import Slider from 'react-slick';
import CloseIcon from '@mui/icons-material/Close';

// Array of resumes for different job roles
const resumesData = [
  { title: 'Front End Developer', description: 'Detailed resume for Front End Developer roles.', pdf: '/pdfs/Cv_draft_1.pdf' },
  { title: 'Full Stack Developer', description: 'Detailed resume for Full Stack Developer roles.', pdf: '/pdfs/Cv_draft_1.pdf' },
  { title: 'Embedded Software Engineer', description: 'Detailed resume for Full Stack Developer roles.', pdf: '/pdfs/CV_SaivinayManda.pdf' },
  { title: 'Robotics Engineer', description: 'Detailed resume for Robotics Engineer roles.', pdf: '/pdfs/CV_SaivinayManda.pdf' }
];

const ResumeCard = ({ resumeTitle, resumeDescription, onViewDetails }) => {
  return (
    <Card sx={{ width: '100%', height: 400, margin: 2, padding: 2, position: 'relative' }}>
      <CardContent>
        {/* Resume Job Role */}
        <Typography variant="h4" gutterBottom>
          {resumeTitle}
        </Typography>

        {/* Resume Description/Details */}
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          {resumeDescription}
        </Typography>

        {/* Placeholder for more resume details */}
        <Typography variant="body2" sx={{ marginTop: 4 }}>
        </Typography>

        {/* View More Details Button */}
        <Button
          variant="contained"
          sx={{ position: 'absolute', bottom: 20, left: 12 }}
          onClick={onViewDetails}
        >
          View More Details
        </Button>
      </CardContent>
    </Card>
  );
};

const ResumeSlider = () => {
  const [open, setOpen] = useState(false);
  const [selectedResume, setSelectedResume] = useState(null);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,           // Enable autoplay
    autoplaySpeed: 4000,      // Change slide every 3 seconds (3000 milliseconds)
    slidesToShow: 1,          // Show one card at a time
    slidesToScroll: 1
  };

  const handleOpen = (resume) => {
    setSelectedResume(resume);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedResume(null);
  };

  return (
    <Box sx={{ width: '80%', margin: 'auto', padding: '40px 0' }}>
      <Slider {...settings}>
        {resumesData.map((resume, index) => (
          <ResumeCard
            key={index}
            resumeTitle={resume.title}
            resumeDescription={resume.description}
            onViewDetails={() => handleOpen(resume)}
          />
        ))}
      </Slider>

      {/* Modal for displaying the PDF */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogContent sx={{ position: 'relative', height: '80vh' }}>
          <IconButton
            sx={{ position: 'absolute', top: 10, right: 10 }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>

          {selectedResume && (
            <iframe
              src={selectedResume.pdf}
              title={selectedResume.title}
              width="100%"
              height="100%"
              style={{ border: 'none' }}
            />
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default ResumeSlider;
