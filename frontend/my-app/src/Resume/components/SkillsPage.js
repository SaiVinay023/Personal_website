import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import SkillCard from './SkillCards'; // Import the SkillCard component



// Skill data organized by category
const skillsData = {
  'Programming Languages': [
    { skill: 'C++', percentage: 40 },
    { skill: 'C', percentage: 20 },
    { skill: 'C#', percentage: 15 },
    { skill: 'Python', percentage: 70, },
    { skill: 'Javascript/ES6', percentage: 80, },
    { skill: 'Typescript', percentage: 60, },

    { skill: 'HTML', percentage: 90 },
    { skill: 'CSS', percentage: 90 },
    { skill: 'MATLAB', percentage: 20, },
    { skill: 'SQL', percentage: 45, },
    { skill: 'JSON', percentage: 90, }

  ],
  'Frameworks & Libraries': [
    { skill: 'ReactJS', percentage: 70 },
    { skill: 'VueJS', percentage: 30 },
    { skill: 'NodeJS', percentage: 70 },
    { skill: 'NextJS', percentage: 30 },
    { skill: 'Express', percentage: 70 },
    { skill: 'Django', percentage: 40 },
    { skill: 'Material UI', percentage: 70 },
    { skill: 'antD', percentage: 40 },
    { skill: 'NextJS', percentage: 30 },
  ],
  'Databases': [
    { skill: 'PostgreSQL', percentage: 50 },
    { skill: 'MongoDB', percentage: 50 },

  ],
  'Hardware/Robotics': [
    { skill: 'ROS1', percentage: 50 },
    { skill: 'ROS2', percentage: 60 },
    { skill: 'V-REP', percentage: 60 },
    { skill: 'CAD', percentage: 60 },
    { skill: 'SolidWorks', percentage: 70 },
    { skill: 'CATIA', percentage: 30 },
    { skill: 'AutoCAD', percentage: 30 },
    { skill: 'Robotics Math', percentage: 20 },
    { skill: 'Understanding Mechanical Design/Layouts', percentage: 80 },
    { skill: 'Understanding Electrical Design/Layouts', percentage: 70 },
    { skill: 'PLC/HMI', percentage: 30 },
    { skill: 'Kuka Robots', percentage: 40 },
   
  ],
  'Microcontrollers': [
    { skill: 'Arduino', percentage: 80 },
    { skill: 'Raspberrypi', percentage: 50 },
    { skill: 'BeagleboneBlack', percentage: 25 }
  ],
  'Soft Skills': [
    { skill: 'Problem Solving', percentage: 80 },
    { skill: 'Attention to Detail', percentage: 80 },
    { skill: 'Collaboration', percentage: 80 },
    { skill: 'Adaptability', percentage: 60 },
    { skill: 'Time Management', percentage: 70 },
    { skill: 'Curiosity for Learning', percentage: 90 },
    { skill: 'Debugging Proficiency', percentage: 90 },
    { skill: 'High Energy', percentage: 80 },
    { skill: 'Hyperfocus', percentage: 95 },
    { skill: 'Resilience', percentage: 75 },
    { skill: 'Multi-tasking', percentage: 100 },
    { skill: 'Creativity', percentage: 70 },
    { skill: 'Positive Attitude', percentage: 85 },
    { skill: 'Goal-Oriented', percentage: 90 }
  ],
  
  
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
