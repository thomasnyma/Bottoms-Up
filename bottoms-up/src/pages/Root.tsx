import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Grid,
  Heading,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';

function Root() {
  const navigate = useNavigate();

  return (
    <Container height='100%'>
      <Grid gridTemplateRows='auto 1fr' height='100vh'>
        <Navigation />
        <Center height='100%' width='100%'>
          <Box>
            <Heading>Welcome to Bottoms Up!</Heading>
            <Divider marginY='2' />
            <Center width='100%'>
              <Button
                colorScheme='teal'
                variant='ghost'
                onClick={() => navigate('/play')}
              >
                Play
              </Button>
              <Button
                colorScheme='teal'
                variant='ghost'
                onClick={() => navigate('/rules')}
              >
                Rules
              </Button>
            </Center>
          </Box>
        </Center>
      </Grid>
    </Container>
  );
}

export default Root;
