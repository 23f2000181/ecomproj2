import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import WeddingsPage from './pages/WeddingsPage';
import ServicesPage from './pages/ServicesPage';
import CategoriesPage from './pages/CategoriesPage';
import VendorPage from './pages/VendorPage';
import VendorProfilePage from './pages/VendorProfilePage';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div className="bg-beige text-brown min-h-screen">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/weddings" element={<WeddingsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/vendor" element={<VendorPage />} />
        <Route path="/vendor/:id" element={<VendorProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
