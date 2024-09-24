// Education.js
import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const educationData = [
  {
    degree: 'BTech in Mechanical Engineering',
    institution: 'The National Institute of Engineering, Mysuru',
    cfu: '240 CFU',
    courses: ['Thermodynamics', 'Fluid Mechanics', 'Material Science', 'CAD'],
    skills: ['Problem-solving', 'Analytical Thinking', 'Design Skills', 'Teamwork'],
    imageUrl: 'path/to/mechanical-engineering-image.jpg',
    modality: 'Learned mechanical design principles and problem-solving through simulations and real-world projects.'
  },
  {
    degree: 'MSc Robotics Engineer',
    institution: 'University of Genoa',
    cfu: '120 CFU',
    courses: ['Robot Kinematics', 'Control Systems', 'Artificial Intelligence', 'ROS'],
    skills: ['Robot Programming', 'AI Integration', 'Automation', 'Research Skills'],
    imageUrl: 'path/to/robotics-engineering-image.jpg',
    modality: 'Developed advanced robotic systems with a focus on automation, AI, and hands-on experience with real robots.'
  }
];

const Education = () => {
  return (
    <Box sx={{ padding: '2rem', backgroundColor: '#f4f4f9' }}>
      <Typography variant="h3" sx={{ marginBottom: '1rem', textAlign: 'center' }}>
        Education
      </Typography>

      <Grid container spacing={4}>
        {educationData.map((education, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card sx={{ display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
              <Box
                component="img"
                sx={{
                  height: 200,
                  width: '100%',
                  objectFit: 'cover',
                }}
                alt={education.degree}
                src={education.imageUrl}
              />

              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {education.degree}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {education.institution} | {education.year} | {education.cfu}
                </Typography>

                <Typography variant="h6" sx={{ marginTop: '1rem' }}>
                  Courses Taken:
                </Typography>
                <List dense>
                  {education.courses.map((course, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckCircleIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={course} />
                    </ListItem>
                  ))}
                </List>

                <Typography variant="h6" sx={{ marginTop: '1rem' }}>
                  Learned Skills:
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, marginTop: '0.5rem' }}>
                  {education.skills.map((skill, index) => (
                    <Chip key={index} label={skill} color="primary" />
                  ))}
                </Box>

                <Typography variant="body1" sx={{ marginTop: '1rem', fontStyle: 'italic' }}>
                  {education.modality}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Education;
