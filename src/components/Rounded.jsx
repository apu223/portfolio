import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const CircularProgressWithLabel = (props) => {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

const Rounded = () => {
  const [progress, setProgress] = useState(0);
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const threshold = window.innerHeight * 0.7;

      if (!animationStarted && scrollY > threshold) {
        const timer = setInterval(() => {
          setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 500);

        // Set animationStarted to true to prevent starting the animation again
        setAnimationStarted(true);

        return () => clearInterval(timer);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [animationStarted]); // Re-run the effect whenever animationStarted changes

  return <CircularProgressWithLabel value={progress} />;
}

export default Rounded;
