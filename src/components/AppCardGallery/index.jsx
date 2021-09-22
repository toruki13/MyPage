import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '../Button';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
const cardData = [
  {
    title: 'SlackAlike',
    description: 'A chat that resembles slack',
    techStack: ['react', 'fireBase', 'next.js', 'styled components'],
    linkDemo: 'https://github.com/toruki13/slackAlike',
    linkRepo: 'https://github.com/toruki13/slackAlike',
  },
  {
    title: 'Chat app',
    description: 'A chat that resembles slack',
    techStack: ['react', 'fireBase', 'next.js', 'material ui'],
    linkDemo: 'https://github.com/toruki13/slackAlike',
    linkRepo: 'https://github.com/toruki13/slackAlike',
  },
  {
    title: 'Nestjs Api',
    description: 'A chat that resembles slack',
    techStack: ['react', 'fireBase', 'next.js', 'material ui'],
    linkDemo: 'https://github.com/toruki13/slackAlike',
    linkRepo: 'https://github.com/toruki13/slackAlike',
  },
  {
    title: 'Nodejs Store',
    description: 'A chat that resembles slack',
    techStack: ['react', 'fireBase', 'next.js', 'material ui'],
    linkDemo: 'https://github.com/toruki13/slackAlike',
    linkRepo: 'https://github.com/toruki13/slackAlike',
  },
  {
    title: 'StreamingApp',
    description: 'Streaming app using odbc',
    techStack: ['react', 'fireBase', 'next.js', 'material ui'],
    linkDemo: 'https://github.com/toruki13/slackAlike',
    linkRepo: 'https://github.com/toruki13/slackAlike',
  },
  {
    title: 'NestJs micro',
    description: 'micro services using nestJS',
    techStack: ['react', 'fireBase', 'next.js', 'material ui'],
    linkDemo: 'https://github.com/toruki13/slackAlike',
    linkRepo: 'https://github.com/toruki13/slackAlike',
  },
];

/* box-shadow: -2px -3px 3px 0px rgb(28 28 28 / 20%);
    border: thin solid  #b3a7bf24;
    border-style: solid;
    border-width: thin; */

const AppCardGallery = () => {
  /*   const flexIfNoMobile = isMobile || '0 32%';
  console.log(isMobile, flexIfNoMobile); */

  const render = cardData.map((data, index) => {
    const { title, description, techStack, linkDemo, linkRepo } = data;
    return (
      <Card
        key={index}
        sx={{
          minWidth: 150,
          margin: '12px',
          boxShadow: '-2px -3px 3px 0px rgb(28 28 28 / 20%)',
          border: ' thin solid  #b3a7bf24',
          /*   flex: `${flexIfNoMobile}`, */
        }}
      >
        <CardContent>
          <Typography
            sx={{ fontSize: 25, textAlign: 'center' }}
            color='text.primary'
            gutterBottom
          >
            {`${title}`}
          </Typography>

          <Typography
            variant='body2'
            color='text.secondary'
          >{`${description}`}</Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button
            onClick={() => window.open(`${linkDemo}`)}
            sx={{ fontSize: 12 }}
            size='small'
          >
            Demo
          </Button>
          <Button
            onClick={() => window.open(`${linkRepo}`)}
            sx={{ fontSize: 12 }}
            size='small'
          >
            Repo
          </Button>
        </CardActions>
      </Card>
    );
  });
  return (
    <>
      <Container>{render}</Container>
    </>
  );
};

export default AppCardGallery;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px;
  border-width: 1px 0px;
  flex-wrap: wrap;

  @media only screen and (min-width: 992px) {
    margin: 0 25%;
  }
  @media only screen and (max-width: 1205px) {
    margin: 0 10%;
  }
  @media only screen and (max-width: 600px) {
    margin: 0 0;
  }
`;
