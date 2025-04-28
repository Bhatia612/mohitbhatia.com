import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HowIBuild from './pages/HowIBuild';
import Contact from './pages/Contact';
import Stack from './pages/Stack';
import Links from './pages/Links';
import Nav from './components/Nav';
import IntroPage from './components/IntroPage';
import './index.css';
import WhoAmI from './pages/WhoAmI';

function AppLayout() {
  return (
    <div className="main">
      <Nav />
      <div className="contentCont">
        <Routes>
          <Route path="/" element={<WhoAmI />} />
          <Route path="/howIBuild" element={<HowIBuild />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/stack" element={<Stack />} />
          <Route path="/links" element={<Links />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router basename="/mohitbhatia.com">
      <Routes>
        <Route path="*" element={showIntro ? <IntroPage /> : <AppLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
