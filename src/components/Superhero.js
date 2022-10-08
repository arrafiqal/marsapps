import { Card, Container, Row, Col, Image } from "react-bootstrap"
import spotifysImage from "../assets/images/trending/spotifys.jpg"


const SuperHero = () => {
  return (
    <div>
      <Container>
        <br />  
        <h1 className="text-white">Spotify Premium</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="superhero">
            <Card className="movieImage">
              <Image src={spotifysImage} alt="Alexa Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Spotify Premium 3 Bulan</Card.Title>
                  <Card.Title className="text-center">Rp25.000,-</Card.Title>
                  <Card.Text className="text-left">
                    Menikmati dengarkan lagu tanpa iklan selama 3 bulan.
                  </Card.Text>
                  <Card.Text className="text-left">
                  <button className="buttons"> <a href="https://wa.me/6285155094220?text=Hallo%20Mars%20App%20saya%20ingin%20membeli%20aplikasi%20premium.">Buy Now</a> </button>
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={spotifysImage}
                alt="Dune Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Spotify Premium 1 Bulan</Card.Title>
                  <Card.Title className="text-center">Rp10.000,-</Card.Title>
                  <Card.Text className="text-left">
                  Menikmati dengarkan lagu tanpa iklan selama 1 Bulan.
                  </Card.Text>
                  <Card.Text className="text-left">
                  <button className="buttons"> <a href="https://wa.me/6285155094220?text=Hallo%20Mars%20App%20saya%20ingin%20membeli%20aplikasi%20premium.">Buy Now</a> </button>
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={spotifysImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Spotify Admin Family 1 Bulan</Card.Title>
                  <Card.Title className="text-center">Rp20.000,-</Card.Title>
                  <Card.Text className="text-left">
                  Menikmati dengarkan lagu tanpa iklan selama 1 Bulan dan bisa melakukan invite 5 anggota.
                  </Card.Text>
                  <Card.Text className="text-left">
                  <button className="buttons"> <a href="https://wa.me/6285155094220?text=Hallo%20Mars%20App%20saya%20ingin%20membeli%20aplikasi%20premium.">Buy Now</a> </button>
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SuperHero
