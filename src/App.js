import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SealcoatPage from './pages/SealcoatPage';
import CrackFillingPage from './pages/CrackFillingPage';
import LinePaintingPage from './pages/LinePaintingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sealcoat" element={<SealcoatPage />} />
          <Route path="/crack" element={<CrackFillingPage />} />
          <Route path="/line" element={<LinePaintingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
