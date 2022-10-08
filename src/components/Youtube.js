import { Card, Container, Row, Col, Image } from "react-bootstrap"
import alexaImage from "../assets/images/trending/alexa.png"
import spotifyImage from "../assets/images/trending/spotify.png"


const Youtube = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">Youtube Premium</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="youtube">
            <Card className="movieImage">
              <Image src={alexaImage} alt="Alexa Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Netflix Private UHD 4K</Card.Title>
                  <Card.Text className="text-left">
                    Bisa digunakan 5 Device berbeda, Jarang Screen limit dan pastinya cocok untuk paket keluarga.
                  </Card.Text>
                  <Card.Text className="text-left">
                  <button type="button" id="btn">Buy Now</button>
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={alexaImage}
                alt="Dune Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    NETFLIX SHARED 1 DEVICE
                  </Card.Title>
                  <Card.Text className="text-left">
                    Hanya dapat digunakan 1 Device saja tidak boleh lebih.
                  </Card.Text>
                  <Card.Text className="text-left">
                  <button type="button" id="btn">Buy Now</button>
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={alexaImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">INFINITE</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with natural lead-in to additional
                    content
                  </Card.Text>
                  <Card.Text className="text-left">
                  <button type="button" id="btn">Buy Now</button>
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={spotifyImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">JOKER</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with natural lead-in to additional
                    content
                  </Card.Text>
                  <Card.Text className="text-left">
                  <button type="button" id="btn">Buy Now</button>
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={spotifyImage}
                alt="Dune Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">LIGHT YEAR</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with natural lead-in to additional
                    content
                  </Card.Text>
                  <Card.Text className="text-left">
                  <button type="button" id="btn">Buy Now</button>
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={spotifyImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Spotify</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with natural lead-in to additional
                    content
                  </Card.Text>
                  <Card.Text className="text-left">
                  <button type="button" id="btn">Buy Now</button>
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
      <p className="Copyright">&copy; @MarsApp</p>
    </div>
  )
}

export default Youtube
