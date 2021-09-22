import Button from '../Button';
import { Avatar } from '@mui/material';
import { isMobile } from 'react-device-detect';
import styled from 'styled-components';

const MainMenu = () => {
  const renderC = () => {
    if (isMobile) {
      return (
        <Container className='container'>
          <Avatar
            alt='Remy Sharp'
            src='https://media-exp1.licdn.com/dms/image/C5603AQGbpQBTkVzDvA/profile-displayphoto-shrink_800_800/0/1517026138515?e=1637798400&v=beta&t=LQPScXJGF4C-UIeQgTV_sU1XVaKu4JIkG8uAngCZAyw'
            sx={{
              width: 90,
              height: 90,
              margin: 'auto',
              marginBottom: '.5rem',
            }}
          />
          <Button
            sx={{ background: 'linear-gradient(90deg, #f5ab15, #de810ee0)' }}
            path={'/portfolio'}
          >
            Portfolio
          </Button>
          <Button path={'https://github.com/toruki13?tab=repositories'}>
            Github
          </Button>
          <Button path={'https://www.linkedin.com/in/roger-munguia-372987101/'}>
            linkedin
          </Button>
          <Button path={'https://dev.to/tintaunicornio'}>Blog</Button>
        </Container>
      );
    } else {
      return (
        <Container className='container'>
          <Avatar
            alt='Remy Sharp'
            src='https://media-exp1.licdn.com/dms/image/C5603AQGbpQBTkVzDvA/profile-displayphoto-shrink_800_800/0/1517026138515?e=1637798400&v=beta&t=LQPScXJGF4C-UIeQgTV_sU1XVaKu4JIkG8uAngCZAyw'
            sx={{
              width: 90,
              height: 90,
              margin: 'auto',
              marginBottom: '.5rem',
            }}
          />
          <Button path={'https://github.com/toruki13'}>Github</Button>
          <Button path={'https://www.linkedin.com/in/roger-munguia-372987101/'}>
            linkedin
          </Button>
          <Button path={'/portfolio'}>Portfolio</Button>
          <Button path={'https://dev.to/tintaunicornio'}>Blog</Button>
        </Container>
      );
    }
  };
  return <>{renderC()}</>;
};

export default MainMenu;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  margin: 15vh auto;
  align-content: space-around;
  flex-wrap: wrap;
`;
