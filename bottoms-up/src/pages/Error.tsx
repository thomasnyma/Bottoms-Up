import { Container, Grid, Heading } from "@chakra-ui/react"
import Navigation from "../components/Navigation"

function Error() {
  return (
    <Grid gridTemplateRows="auto 1fr" height={"100vh"}>
      <Container>
        <Navigation />
        <Heading>Page not found</Heading>
      </Container>
    </Grid>
  )
}

export default Error
