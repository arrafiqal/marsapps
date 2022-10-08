import { Card, Container, Row, Col, Image } from "react-bootstrap"
import youtubesImage from "../assets/images/trending/youtubes.jpg"


const Youtube = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">Youtube Premium</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="Youtube">
            <Card className="movieImage">
              <Image src={youtubesImage} alt="Alexa Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Youtube Premium 4 Bulan</Card.Title>
                  <Card.Title className="text-center">Rp25.000,-</Card.Title>
                  <Card.Text className="text-left">
                    Nonton youtube bebas tanpa iklan dan menikmati premium selama 4 bulan.
                  </Card.Text>
                  <Card.Text className="text-left">
                  <button className="buttons"> <a href="https://wa.me/6285155094220?text=Halo%20saya%20ingin%20membeli%20Youtube%20Premium%204%20bulan%20dengan%20harga%20Rp25.000,-">Buy Now</a> </button>
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={youtubesImage}
                alt="Dune Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center"> Youtube Premium 1 Bulan</Card.Title>
                  <Card.Title className="text-center">Rp8.000,-</Card.Title>
                  <Card.Text className="text-left">
                  Nonton youtube bebas tanpa iklan dan menikmati premium selama 1 bulan.
                  </Card.Text>
                  <Card.Text className="text-left">
                  <button className="buttons"> <a href="https://wa.me/6285155094220?text=Halo%20saya%20ingin%20membeli%20Youtube%20Premium%201%20Bulan%20dengan%20harga%20Rp8.000,-">Buy Now</a> </button>
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={youtubesImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center"> Youtube Admin Family 1 Bulan </Card.Title>
                  <Card.Title className="text-center"> Rp15.000,- </Card.Title>
                  <Card.Text className="text-left">
                    Bisa mengundang 5 anggota untuk bergabung pada youtube premium dan bebas iklan.
                  </Card.Text>
                  <Card.Text className="text-left">
                 <button className="buttons"> <a href="https://wa.me/6285155094220?text=Halo%20saya%20ingin%20membeli%20Youtube%20Premium%20admin%20dengan%20harga%20Rp15.000,-">Buy Now</a> </button>
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
      <p className="copyright">&copy; @MarsApp</p>
    </div>
  )
}

export default Youtube
