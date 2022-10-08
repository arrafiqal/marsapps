import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">MARS APP</Navbar.Brand>
          <Nav>
            <Nav.Link href="#trending">Netflix</Nav.Link>
            <Nav.Link href="#superhero">Spotify</Nav.Link>
            <Nav.Link href="#Youtube">Youtube</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBar
