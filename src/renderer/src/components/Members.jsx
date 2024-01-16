import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Members = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Members Page</h1>
      <Button variant="primary" onClick={() => navigate('/')}>
        Home
      </Button>
    </div>
  )
}

export default Members
