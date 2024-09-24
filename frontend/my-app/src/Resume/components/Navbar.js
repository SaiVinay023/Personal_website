import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ top: 0, left: 0, width: '100%', backgroundColor: '#1976d2', boxShadow: 3 }}>
      <Toolbar>
        <Container>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
          </Typography>
          <Button color="inherit" component={Link} to="/" sx={{ margin: 1 }}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about" sx={{ margin: 1 }}>
            About Me
          </Button>
          <Button color="inherit" component={Link} to="/education" sx={{ margin: 1 }}>
            Education
          </Button>
          <Button color="inherit" component={Link} to="/skills" sx={{ margin: 1 }}>
            Skills
          </Button>
          <Button color="inherit" component={Link} to="/projects" sx={{ margin: 1 }}>
            Projects
          </Button>
          <Button color="inherit" component={Link} to="/resume" sx={{ margin: 1 }}>
            Resume/CV
          </Button>
         
          
          <Button color="inherit" component={Link} to="/hobbies" sx={{ margin: 1 }}>
            Hobbies
          </Button>
          
          <Button color="inherit" component={Link} to="/achievements" sx={{ margin: 1 }}>
            Achievements
          </Button>
          <Button color="inherit" component={Link} to="/experiences" sx={{ margin: 1 }}>
            Experiences
          </Button>
          <Button color="inherit" component={Link} to="/contact" sx={{ margin: 1 }}>
            Contact Me
          </Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
