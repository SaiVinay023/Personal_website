import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

// Framer Motion animation settings for sliding
const cardVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 }
};

const AboutMeCard = ({ content }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={cardVariants}
      transition={{ duration: 0.8 }}
    >
      <Card sx={{ maxWidth: 400, margin: 'auto', marginBottom: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
          </Typography>
          <Typography variant="body1">
            {content}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AboutMeCard;
