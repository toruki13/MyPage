import Header from '../Header';
import AppCardGallery from '../AppCardGallery';
import { Typography } from '@mui/material';

const Porfolio = () => {
  return (
    <>
      <Header />
      <Typography sx={{ fontSize: 60, textAlign: 'center' }} color='white'>
        Portfolio
      </Typography>

      <AppCardGallery />
    </>
  );
};

export default Porfolio;
