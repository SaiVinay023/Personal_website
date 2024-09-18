import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Dialog, DialogTitle, DialogContent, Button } from '@mui/material';
import Slider from 'react-slick';

const projectsData = Array.from({ length: 23 }, (_, i) => `Project ${i + 1}`);

const ProjectCard = ({ projectName, onClick, highlighted }) => {
  return (
    <Card
      sx={{
        width: 400,
        height: 300,
        margin: 2,
        cursor: 'pointer',
        transition: 'transform 0.3s, box-shadow 0.3s',
        transform: highlighted ? 'scale(1.1)' : 'scale(1)',
        boxShadow: highlighted
          ? '0px 4px 20px rgba(0, 0, 0, 0.3)'
          : '0px 1px 5px rgba(0, 0, 0, 0.1)',
      }}
      onClick={onClick}
    >
      <CardContent>
        {/* Project Name */}
        <Typography variant="h4" gutterBottom>
          {projectName}
        </Typography>

        {/* Project Preface/Details */}
        <Typography variant="body1">
          This is a short description or preface for {projectName}. Click to see more details.
        </Typography>
      </CardContent>
    </Card>
  );
};

const ProjectsSlider = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to handle opening the popup
  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  // Function to handle closing the popup
  const handleClose = () => {
    setOpen(false);
  };

  // Slider settings for sliding left and right
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ width: '100%', margin: 'auto', padding: '40px 0' }}>
      <Slider {...settings}>
        {projectsData.map((project, index) => {
          const isHighlighted = Math.floor(currentSlide % projectsData.length) === index;
          return (
            <ProjectCard
              key={index}
              projectName={project}
              onClick={() => handleOpen(project)}
              highlighted={isHighlighted}
            />
          );
        })}
      </Slider>

      {/* Popup Dialog */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>{selectedProject}</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            This is the detailed view of {selectedProject}. You can add more detailed information here, such as a full description, objectives, challenges, and accomplishments related to the project.
          </Typography>
          <Box sx={{ marginTop: 3 }}>
            <Button onClick={handleClose} variant="contained" color="primary">
              Close
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default ProjectsSlider;
