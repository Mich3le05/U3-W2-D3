import '../App.css'
import Dropdown from 'react-bootstrap/Dropdown'
import SplitButton from 'react-bootstrap/SplitButton'
import { List, ThreeDots } from 'react-bootstrap-icons'

const Selection = () => {
  return (
    <div className="bg-color text-white d-flex align-items-center justify-content-between p-3 pt-4">
      <div className="d-flex align-items-center">
        <h1>TV Shows</h1>

        <div className="ms-4 ">
          <SplitButton
            align={{ lg: 'start' }}
            title="Genres"
            id="dropdown-menu-align-responsive-2"
            variant="dark"
          >
            <Dropdown.Item eventKey="1">animazione</Dropdown.Item>
            <Dropdown.Item eventKey="2">avventura</Dropdown.Item>
            <Dropdown.Item eventKey="4">biografico</Dropdown.Item>
            <Dropdown.Item eventKey="5">comico</Dropdown.Item>
            <Dropdown.Item eventKey="6">drammatico</Dropdown.Item>
            <Dropdown.Item eventKey="7">azione</Dropdown.Item>
            <Dropdown.Item eventKey="8">horror</Dropdown.Item>
          </SplitButton>
        </div>
      </div>
      <div className=" d-flex m-3 justify-content-end">
        <List
          color="white"
          size={35}
          className="border border-1 border-light px-2 py-1"
        />
        <ThreeDots
          color="white"
          size={35}
          className="border border-1 border-light px-2 py-1"
        />
      </div>
    </div>
  )
}

export default Selection
