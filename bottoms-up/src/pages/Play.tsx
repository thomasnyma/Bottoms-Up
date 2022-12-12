import { Box, Button, Center, Container, Grid, Image } from '@chakra-ui/react';
import { useState } from 'react';
import Navigation from '../components/Navigation';
import { getRandomCard } from '../utils/utils';

function Play() {
  const [source, setSource] = useState('bottoms_up');

  const drawNewCard = () => {
    setSource(getRandomCard());
  };

  return (
    <Container height='100%'>
      <Grid gridTemplateRows='auto 1fr' height='100vh'>
        <Navigation />
        <Center height='100%' width='100%'>
          <Box width='100%'>
            <Image
              src={'cards/' + source + '.png'}
              alt='currentCard'
              width='60%'
              marginX='20%'
              borderRadius='lg'
            />
            <Center marginTop='10'>
              <Button colorScheme='teal' variant='ghost' onClick={drawNewCard}>
                Draw a card
              </Button>
            </Center>
          </Box>
        </Center>
      </Grid>
    </Container>
  );
}

export default Play;
