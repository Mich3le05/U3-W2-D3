import { useNavigate } from 'react-router'
import { Button } from 'react-bootstrap'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className="text-center py-3 bg-color vh-100">
      <h1 className="text-center text-white">Sono in NOTFOUND, 404</h1>
      <Button
        onClick={() => {
          navigate('/')
        }}
      >
        Torna in home
      </Button>
    </div>
  )
}

export default NotFound
