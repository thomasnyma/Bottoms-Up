import { Box, Button, Flex, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();

  return (
    <Flex w='100%' paddingY={4} alignItems="center" justifyContent="space-between">
      <Text fontSize={'xl'} onClick={() => navigate('/')}>Bottoms Up</Text>

      <Box>
        <Button colorScheme='teal' variant='ghost' onClick={() => navigate('/play')}>
          Play
        </Button>
        <Button colorScheme='teal' variant='ghost' onClick={() => navigate('/rules')}>
          Rules
        </Button>
      </Box>
    </Flex>
  )
}

export default Navigation
