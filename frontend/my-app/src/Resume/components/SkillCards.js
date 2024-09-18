import React from 'react';
import { Card, CardContent, Typography, Box, LinearProgress } from '@mui/material';

// Function to determine the color of the meter based on the percentage
const getMeterColor = (percentage) => {
  if (percentage < 20) return 'error';      // Red
  if (percentage >= 20 && percentage < 40) return 'warning'; // Yellow
  if (percentage >= 40 && percentage < 70) return 'info';    // Blue
  return 'success';                        // Green for 70%+
};

const SkillCard = ({ skill, percentage }) => {
  return (
    <Card
      sx={{
        height: '150px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
        transition: 'transform 0.3s',
        '&:hover': {
          transform: 'scale(1.05)', // Hover effect
        },
      }}
    >
      <CardContent sx={{ width: '100%' }}>
        {/* Skill Name */}
        <Typography variant="h6" gutterBottom textAlign="center">
          {skill}
        </Typography>

        {/* Skill Meter with Percentage */}
        <Box sx={{ position: 'relative', width: '100%' }}>
          <LinearProgress
            variant="determinate"
            value={percentage}
            color={getMeterColor(percentage)}
            sx={{ height: 10, borderRadius: 5 }}
          />
          <Typography
            variant="body2"
            sx={{
              position: 'absolute',
              top: -20,
              right: 0,
              fontWeight: 'bold',
              color: getMeterColor(percentage),
            }}
          >
            {percentage}%
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
