import React from 'react'
import {
  Container,
  Row,
  Col,
  Button,
  Dropdown,
  DropdownButton,
} from 'react-bootstrap'
import { CheckSquare } from 'react-bootstrap-icons'

const Profile = () => {
  return (
    <Container className=" mt-3 p-5 bg-color text-white">
      <h1>Edit Profile</h1>
      <hr />
      <Row className="d-flex flex-column flex-md-row">
        <Col className="mb-3 mb-md-0" xs={12} md={2}>
          <img src="/assets/images/avatar.png" alt="avatar" width="120px" />
        </Col>
        <Col xs={12} md={10}>
          <h5 className="bg-secondary px-2 py-2">Strive Student</h5>
          <h6 className="text-white-50 mb-2 mt-4">Language</h6>
          <DropdownButton
            id="dropdown-language"
            title="English"
            className="d-inline-block"
            variant="dark"
          >
            <Dropdown.Item>Cinese</Dropdown.Item>
            <Dropdown.Item>Spagnolo</Dropdown.Item>
            <Dropdown.Item>Italiano</Dropdown.Item>
            <Dropdown.Item>Portoghese</Dropdown.Item>
            <Dropdown.Item>Tedesco</Dropdown.Item>
            <Dropdown.Item>Greco</Dropdown.Item>
          </DropdownButton>
          <hr />
          <h6 className="text-white-50 mb-2 mt-4">Maturity Settings:</h6>
          <Button variant="dark" className="fw-semibold p-2">
            ALL MATURITY RATINGS
          </Button>
          <p className="mt-3">
            Show titles of all maturity ratings for this profile.
          </p>
          <Button variant="outline-light" className="border-2 p-1 px-4">
            EDIT
          </Button>
          <hr />
          <h6 className="text-white-50 mb-2 mt-4">Autoplay controls</h6>
          <div className="d-flex align-items-center mb-2">
            <CheckSquare />
            <p className="ms-2 mb-0">
              Autoplay next episode in a series on all devices.
            </p>
          </div>
          <div className="d-flex align-items-center">
            <CheckSquare />
            <p className="ms-2 mb-0">
              Autoplay previews while browsing on all devices.
            </p>
          </div>
        </Col>
      </Row>
      <hr />
      <div className="d-flex flex-column flex-md-row gap-2">
        <Button variant="light" className="text-black fw-semibold px-4">
          SAVE
        </Button>
        <Button
          variant="outline-light"
          className="text-light fw-semibold border-2 px-4"
        >
          CANCEL
        </Button>
        <Button
          variant="outline-light"
          className="text-light fw-semibold border-2 px-4"
        >
          DELETE PROFILE
        </Button>
      </div>
    </Container>
  )
}

export default Profile
