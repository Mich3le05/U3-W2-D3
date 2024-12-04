import '../App.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Facebook, Instagram, Twitter, Youtube } from 'react-bootstrap-icons'

const MyFooter = () => (
  <footer className="bg-color text-light-emphasis pt-5">
    <Container>
      <div className="mb-3">
        <h1>
          <Facebook className="mx-2" />
          <Instagram className="mx-2" />
          <Twitter className="mx-2" />
          <Youtube className="mx-2" />
        </h1>
      </div>
      <Row className="mt-3">
        <Col xs={12} md={3} lg={3} className="mb-3">
          <p>Audio and Subtitles</p>
          <p>Media Center</p>
          <p>Privacy</p>
          <p>Contact Us</p>
          <button className="border border-2 border-dark px-1 ps-1 bg-transparent text-light-emphasis">
            Service Code
          </button>
          <p className="mt-3">&copy; 1997-2019 Netflix, Inc.i-0d00fcdt9c</p>
        </Col>
        <Col xs={12} md={3} lg={3} className="mb-3">
          <p>Audio Description</p>
          <p>Investor Relations</p>
          <p>Legal Notices</p>
        </Col>
        <Col xs={12} md={3} lg={3} className="mb-3">
          <p>Help Center</p>
          <p>Jobs</p>
          <p>Cookie Preferences</p>
        </Col>
        <Col xs={12} md={3} lg={3} className="mb-3">
          <p>Gift Cards</p>
          <p>Terms of Use</p>
          <p>Corporate Information</p>
        </Col>
      </Row>
    </Container>
  </footer>
)

export default MyFooter
