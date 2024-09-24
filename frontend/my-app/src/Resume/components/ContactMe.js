import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, Card, CardContent, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can send formData to the backend or email service.
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" sx={{ marginBottom: 4, textAlign: 'center' }}>
        Contact Me
      </Typography>

      <Grid container spacing={4}>
        {/* Left side - Freelancing details and contact methods */}
        <Grid item xs={12} md={6}>
          <Card sx={{ marginBottom: 3 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: 2 }}>
               feel free to reach out using the form or through
                one of the contact methods below.
              </Typography>

              {/* Contact methods */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <IconButton component="a" href="saivinay023@gmail.com">
                  <EmailIcon />
                </IconButton>
                <IconButton component="a" href="tel:+393482625113">
                  <PhoneIcon />
                </IconButton>
                <IconButton component="a" href="https://www.linkedin.com/in/saivinaymanda/" target="_blank">
                  <LinkedInIcon />
                </IconButton>
                <IconButton component="a" href="https://github.com/SaiVinay023?tab=repositories" target="_blank">
                  <GitHubIcon />
                </IconButton>
                <IconButton component="a" href="https://twitter.com/yourprofile" target="_blank">
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Right side - Contact form */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Contact Form
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  margin="normal"
                  multiline
                  rows={4}
                  required
                />
                <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactMe;
