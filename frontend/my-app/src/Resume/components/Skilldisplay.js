import React from 'react';
import { Container } from '@mui/material';
import SkillCard from './SkillCards'; // Assuming this is the path to your SkillCard component

const SkillsDisplay = () => {
  const skills = [
    { skill: 'React', percentage: 90, counter: 0 },
    { skill: 'Node.js', percentage: 85, counter: 0 },
    { skill: 'PostgreSQL', percentage: 80, counter: 0 },
    // Add more skills as needed
  ];

  return (
    <Container>
      {skills.map((skillObj, index) => (
        <SkillCard
          key={index}
          skill={skillObj.skill}
          percentage={skillObj.percentage}
          counterInitial={skillObj.counter}
        />
      ))}
    </Container>
  );
};

export default SkillsDisplay;
