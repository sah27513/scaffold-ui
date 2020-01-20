import { makeStyles } from '@material-ui/core/styles';
import { primaryButton } from 'app/styles/shared';

// Export the Use Styles function
export const useStyles = makeStyles(theme => ({
  primaryButton,
  root: {
    height: '100vh'
  },
  image: {
    backgroundImage: "url('https://tlsiteimages.blob.core.windows.net/site-images/hero-image.jpg')",
    backgroundRepeat: 'no-repeat',
    backgroundColor: theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  login: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '-150px',
    background: "url('https://tlsiteimages.blob.core.windows.net/site-images/hero-image.jpg')",
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    textAlign: 'center',
    verticalAlign: 'middle',
    height: '100vh',
    width: '100%'
  }
}));
