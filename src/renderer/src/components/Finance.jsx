import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Finance = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Finance Page</h1>
      <Button variant="primary" onClick={() => navigate('/')}>
        Home
      </Button>
    </div>
  )
}

export default Finance
