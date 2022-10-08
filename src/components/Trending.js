import { Card, Container, Row, Col, Image } from "react-bootstrap"
import netflixsImage from "../assets/images/trending/netflixs.jpg"


const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">Netflix Premium</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="movieImage">
              <Image src={netflixsImage} alt="Alexa Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Netflix Private UHD 4K (1 Bulan)</Card.Title>
                  <Card.Title className="text-center">Rp120.000,-</Card.Title>
                  <Card.Text className="text-left">
                    Bisa digunakan 5 Device berbeda, Jarang Screen limit dan pastinya cocok untuk paket keluarga.
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
                src={netflixsImage}
                alt="Dune Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    NETFLIX SHARED 1 DEVICE (1 Bulan)
                  </Card.Title>
                  <Card.Title className="text-center">Rp30.000,-</Card.Title>
                  <Card.Text className="text-left">
                    Hanya dapat digunakan 1 orang 1 Device tidak boleh lebih.
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
              <Image src={netflixsImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Netflix Sharing 2 Device (1 Bulan)</Card.Title>
                  <Card.Title className="text-center">Rp20.000,-</Card.Title>
                  <Card.Text className="text-left">
                    Dalam 1 User terdapat 2 orang yang menggunakan dan sering screen limit.
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

export default Trending
