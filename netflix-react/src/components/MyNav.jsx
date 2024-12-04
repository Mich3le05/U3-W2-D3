import {
  Navbar,
  Nav,
  Container,
  Dropdown,
  DropdownButton,
} from 'react-bootstrap'
import { Search, Bell, Person, Star, Gear, Power } from 'react-bootstrap-icons'
import '../App.css'

const MyNav = () => (
  <Navbar expand="lg" className="bg-color" color="white">
    <Container fluid>
      <Navbar.Brand>
        <img
          src="/assets/images/logo.png"
          alt="Logo"
          width="100px"
          className="me-3"
        />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        className="bg-light-subtle"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#" className="text-white">
            Home
          </Nav.Link>
          <Nav.Link href="#" className="text-white">
            TV Shows
          </Nav.Link>
          <Nav.Link href="#" className="text-white">
            Movies
          </Nav.Link>
          <Nav.Link href="#" className="text-white">
            Recently Added
          </Nav.Link>
          <Nav.Link href="#" className="text-white">
            My List
          </Nav.Link>
        </Nav>
        <div className="d-flex align-items-center ms-auto">
          <Search color="white" size={18} className="me-3" />
          <Nav.Link href="#" className="text-white me-3">
            KIDS
          </Nav.Link>
          <Bell color="white" size={18} className="me-3" />
          <img src="/assets/images/avatar.png" alt="Avatar" width="35px" />
          <DropdownButton variant="dark" className="m-0" align="end">
            <Dropdown.Item className=" fw-bold fs-5">
              Name Surname
            </Dropdown.Item>
            <Dropdown.Item>avatar@avatar.com</Dropdown.Item>
            <Dropdown.Divider />
            <span className="d-flex align-items-center">
              <Person size={20} className="mx-1" />
              <Dropdown.Item className="p-0">Profile</Dropdown.Item>
            </span>
            <span className="d-flex align-items-center">
              <Star size={20} className="mx-1" />
              <Dropdown.Item className="p-0">Subscription</Dropdown.Item>
            </span>
            <span className="d-flex align-items-center">
              <Gear size={20} className="mx-1" />
              <Dropdown.Item className="p-0">Settings</Dropdown.Item>
            </span>
            <Dropdown.Divider />
            <span className="d-flex align-items-center">
              <Power size={20} className="mx-1" />
              <Dropdown.Item className="p-0">Sign Out</Dropdown.Item>
            </span>
          </DropdownButton>
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default MyNav
