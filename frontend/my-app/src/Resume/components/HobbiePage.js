import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HikingIcon from '@mui/icons-material/Hiking';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import HeadphonesIcon from '@mui/icons-material/Headphones'; // For Songs/Music
import BrushIcon from '@mui/icons-material/Brush'; // For Art
import CodeIcon from '@mui/icons-material/Code'; // For Programming

// Hobby data with icons and proficiency percentages
const hobbiesData = [
  { hobby: 'Dance', icon: <SelfImprovementIcon />, percentage: 75 },
  { hobby: 'Songs', icon: <HeadphonesIcon />, percentage: 85 },
  { hobby: 'Sports', icon: <SportsSoccerIcon />, percentage: 90 },
  { hobby: 'Music', icon: <MusicNoteIcon />, percentage: 80 },
  { hobby: 'Fitness', icon: <FitnessCenterIcon />, percentage: 85 },
  { hobby: 'Adventure', icon: <HikingIcon />, percentage: 70 },
  { hobby: 'Mindfulness', icon: <SelfImprovementIcon />, percentage: 60 },
  { hobby: 'Thoughtset & Philosophy', icon: <EmojiObjectsIcon />, percentage: 80 },
  { hobby: 'Art & Drawing', icon: <BrushIcon />, percentage: 65 },
  { hobby: 'Programming', icon: <CodeIcon />, percentage: 95 }
];

// Helper function to dynamically generate background color based on percentage
const getBackgroundColor = (percentage) => {
  if (percentage >= 85) return '#c8e6c9'; // Greenish for high percentage
  if (percentage >= 70) return '#fff9c4'; // Yellowish for medium percentage
  return '#ffcdd2'; // Reddish for lower percentage
};

const HobbyCard = ({ hobby, icon, percentage }) => {
  return (
    <Card
      sx={{
        width: 250, // Equal width for all cards
        height: 250, // Equal height for all cards
        marginBottom: 3,
        position: 'relative',
        backgroundColor: getBackgroundColor(percentage), // Dynamic background color
        transition: 'transform 0.3s',
        '&:hover': {
          transform: 'scale(1.05)' // Scale effect on hover
        }
      }}
    >
      <CardContent>
        {/* Hobby Name */}
        <Typography variant="h6" gutterBottom>
          {hobby}
        </Typography>

        {/* Icon and Percentage */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Proficiency Icon */}
          <Box sx={{ position: 'absolute', bottom: 10, right: 10 }}>
            {icon}
          </Box>

          {/* Proficiency Percentage */}
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            {percentage}%
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

const HobbiesPage = () => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
      {hobbiesData.map((hobbyItem, index) => (
        <HobbyCard
          key={index}
          hobby={hobbyItem.hobby}
          icon={hobbyItem.icon}
          percentage={hobbyItem.percentage}
        />
      ))}
    </Box>
  );
};

export default HobbiesPage;
