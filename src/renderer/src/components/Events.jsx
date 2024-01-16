import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Events = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Events Page</h1>
      <Button variant="primary" onClick={() => navigate('/')}>
        Home
      </Button>
    </div>
  )
}

export default Events
