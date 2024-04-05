import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    background: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: 'url(your-image.jpg)',  // Replace with your background image path
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      filter: `blur(5px)`, // Adjust blur amount as desired
      backdropFilter: `blur(5px) grayscale(0.2)`, // Adjust blur and grayscale as desired
    },
  }));

  
  function MyComponent() {
    const classes = useStyles();
  
    return (
      <div>
        {/* Your other content */}
        <Box className={classes.background} />
      </div>
    );
  }
  