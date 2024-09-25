import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Dialog, DialogTitle, DialogContent, Button, Link } from '@mui/material';
import Slider from 'react-slick';

// Updated project data structure
const projectsData = [
  {
    name: 'Personal Website',
    githubUrl: 'https://github.com/SaiVinay023/Personal_website.github.io', 
    description: 'A personal website to showcase my projects and skills.Full stack project using React, node, postgres, docker and rest apis',
  },
  {
    name: 'REST API with Node.js and Express.js',
    githubUrl: 'https://github.com/SaiVinay023/REST-api-with-nodejs-and-expressjs', 
    description: 'A RESTful API built using Node.js and Express.js for managing data.Utilizing JSON for data handling, the API ensures efficient communication between the server and client applications. Technical Implementation Methodology',
  },
  {
    name: 'BehaviourTrees/ROS2/C++',
    githubUrl: 'https://github.com/SaiVinay023/Behaviourtrees_rosmonitoring',
    description: 'Instructions for using both the offline and online monitors with ROSMonitoring.',
  },
  {
    name: 'Synthetic_data_generation/Unity/ML',
    githubUrl: 'https://github.com/SaiVinay023/Synthetic_data_generation-ML-unity',
    description: 'This project is an HDRP (High Definition Render Pipeline) project created in Unity 2020.3.21f1 using the Perception 0.8.0-preview.4 package. It is designed for generating synthetic data for various computer vision tasks..',
  },
];
const ProjectCard = ({ project, onClick, highlighted }) => {
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
          {project.name}
        </Typography>

        {/* GitHub URL */}
        <Typography variant="body1" color="primary">
          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </Link>
        </Typography>

        {/* Project Preface/Details */}
        <Typography variant="body1">
          {project.description.split('.')[0]} Click to see more details.
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
              project={project}
              onClick={() => handleOpen(project)}
              highlighted={isHighlighted}
            />
          );
        })}
      </Slider>

      {/* Popup Dialog */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>{selectedProject?.name}</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            {selectedProject?.description}
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            <Link href={selectedProject?.githubUrl} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </Link>
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