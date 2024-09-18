import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import SkillCard from './SkillCards'; // Import the SkillCard component

// Skill data organized by category
const skillsData = {
  'Programming Languages': [
    { skill: 'C++', percentage: 90 },
    { skill: 'C', percentage: 85 },
    { skill: 'Java', percentage: 80 },
    { skill: 'Python', percentage: 95 }
  ],
  'Frameworks & Libraries': [
    { skill: 'ReactJS', percentage: 90 },
    { skill: 'VueJS', percentage: 75 },
    { skill: 'NodeJS', percentage: 85 },
    { skill: 'NextJS', percentage: 80 },
    { skill: 'Express', percentage: 80 }
  ],
  'Databases': [
    { skill: 'PostgreSQL', percentage: 85 },
    { skill: 'MongoDB', percentage: 75 }
  ],
  'Hardware/Robotics': [
    { skill: 'ROS1', percentage: 70 },
    { skill: 'ROS2', percentage: 65 },
    { skill: 'V-REP', percentage: 60 },
    { skill: 'CAD', percentage: 80 },
    { skill: 'SolidWorks', percentage: 85 },
    { skill: 'CATIA', percentage: 75 },
    { skill: 'AutoCAD', percentage: 80 },
    { skill: 'Microcontrollers', percentage: 75 },
    { skill: 'BeagleBone Black', percentage: 60 },
    { skill: 'Raspberry Pi', percentage: 85 },
    { skill: 'Arduino', percentage: 90 }
  ]
};

const SkillsPage = () => {
  return (
    <Container>
      {Object.keys(skillsData).map((category, index) => (
        <Box key={index} sx={{ marginBottom: 4 }}>
          <Typography variant="h4" sx={{ marginBottom: 2 }}>
            {category}
          </Typography>
          <Grid container spacing={2}>
            {skillsData[category].map((skillItem, skillIndex) => (
              <Grid item xs={12} sm={6} md={4} key={skillIndex}>
                <SkillCard
                  skill={skillItem.skill}
                  percentage={skillItem.percentage}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Container>
  );
};

export default SkillsPage;
