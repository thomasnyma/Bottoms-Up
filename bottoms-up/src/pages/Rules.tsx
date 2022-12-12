import { Container, Grid, Heading } from '@chakra-ui/react';
import Navigation from '../components/Navigation';

function Rules() {
  return (
    <Grid gridTemplateRows='auto 1fr' height={'100vh'}>
      <Container>
        <Navigation />
      </Container>
    </Grid>
  );
}

export default Rules;
