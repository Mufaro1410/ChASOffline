import { Button } from 'react-bootstrap'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div>
      <Sidebar />
      <h1>Home Page</h1>
      <div>
        <Button variant="primary" onClick={() => navigate('/login')}>
          logout
        </Button>
        <Button variant="primary" onClick={() => navigate('/members')}>
          Members
        </Button>
        <Button variant="primary" onClick={() => navigate('/events')}>
          Events
        </Button>
        <Button variant="primary" onClick={() => navigate('/finance')}>
          Finance
        </Button>
      </div>
      <Outlet />
    </div>
  )
}

export default Home
