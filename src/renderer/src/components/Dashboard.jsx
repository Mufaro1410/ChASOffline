import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Dashboard</h1>
      <Button variant="primary" onClick={() => navigate('/')}>
        Home
      </Button>
    </div>
  )
}

export default Dashboard
