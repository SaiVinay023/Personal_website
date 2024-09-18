import React, { useState, useEffect } from 'react';
import { LinearProgress, Typography, Box, Button } from '@mui/material';

const SkillMeter = ({ skill, percentage }) => {
  const [counter, setCounter] = useState(0);

  // This function will be used to update the counter
  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <Typography variant="h6">{skill}</Typography>
        <LinearProgress variant="determinate" value={percentage} />
      </Box>
      <Box sx={{ minWidth: 50, textAlign: 'right' }}>
        <Typography variant="body1">{percentage}%</Typography>
      </Box>
      <Button variant="outlined" onClick={increaseCounter}>Counter: {counter}</Button>
    </Box>
  );
};

export default SkillMeter;
