import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout/MainLayout';
import Home from './pages/Home/Home';
import Management from './pages/Management/Management';
import Documents from './pages/Documents/Documents';
import './App.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="management" element={<Management />} />
          <Route path="documents" element={<Documents />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
