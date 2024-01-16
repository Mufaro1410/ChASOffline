import { Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Members from './components/Members'
import Events from './components/Events'
import Finance from './components/Finance'

function App() {
  return (
    <div className="container-fluid">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/members" element={<Members />} />
          <Route path="/events" element={<Events />} />
          <Route path="/finance" element={<Finance />} />
          <Route index element={<Dashboard />} />
        </Route>
        <Route index element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
