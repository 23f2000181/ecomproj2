import { Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import WeddingsPage from './pages/WeddingsPage'
import NavigationBar from './components/NavigationBar'

function App() {
  return (
    <div className="bg-beige text-brown min-h-screen">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/weddings" element={<WeddingsPage />} />
        {/* Add other routes as needed */}
      </Routes>
    </div>
  )
}

export default App
