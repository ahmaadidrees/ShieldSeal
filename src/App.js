import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SealcoatPage from './pages/SealcoatPage';
import CrackFillingPage from './pages/CrackFillingPage';
import LinePaintingPage from './pages/LinePaintingPage';
import ContactPage from './pages/ContactPage';

// function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }, [pathname]);

//   return null;
// }

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sealcoat" element={<SealcoatPage />} />
          <Route path="/crack" element={<CrackFillingPage />} />
          <Route path="/line" element={<LinePaintingPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
