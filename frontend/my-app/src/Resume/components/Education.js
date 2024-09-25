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
    courses: ['Engineering Mathematics 1, 2, 3, 4', 'Computer concepts and C Programming', 'Computer Programming Lab','Mechatronics', 'CAD/CAM course+Lab', 'Professional Communication','Engineering Management','Microgrids with RE Integration'],
    skills: ['Problem-solving', 'Analytical Thinking', 'Design Skills', 'Teamwork', 'Math Skills'],
    imageUrl: 'NIE.jpeg',
    modality: 'Throughout these subjects, I developed strong problem-solving and analytical thinking skills, using engineering principles to tackle complex challenges. My design skills were honed through simulations and real-world projects, emphasizing creativity and precision in mechanical design. Teamwork was a key component, where collaboration and communication were essential for success. I also applied advanced math skills to model and solve engineering problems, integrating theory with hands-on practice. This approach allowed me to blend technical knowledge with practical application, enhancing my overall engineering competence.'
  },
  {
    degree: 'MSc Computer Science (Robotics Engineer)',
    institution: 'University of Genoa',
    cfu: '120 CFU',
    courses: ['Artificial Intelligence - 1, 2','Machine Learning', 'Advanced and Robot Programming', 'Software Architecture for Robotics', 'Flexible Automation','Social Robotics', 'Real Time Operating Systems', 'Human Computer Interaction', 'Experimental Robotics'],
    skills: ['Robot Programming and Software Architectures', 'AI Integration', 'Automation', 'Research Skills','Machine learning ', 'real-time systems', 'Advanced robot programming', 'Problem-solving in flexible and experimental robotics'],
    imageUrl: 'unige.jpeg',
    modality: 'I focused on programming and developing software architectures tailored for advanced robotic systems. Through hands-on projects, I designed adaptable software solutions using AI and machine learning to enhance real-time robotic capabilities. My experience emphasized practical programming skills, including coding complex robot behaviors, integrating sensors, and building interactive systems that blend innovative software design with real-world applications. This approach allowed me to refine my programming techniques, focusing on creating flexible and efficient robotic automation solutions grounded in modern engineering practices.'
  }
];

const Education = () => {
  return (
    <Box sx={{ padding: '2rem', backgroundColor: '#f4f4f9' }}>
      <Typography variant="h3" sx={{ marginBottom: '1rem', textAlign: 'center' }}>
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
