import { useEffect, useState } from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import IntroPage from './components/IntroPage';
import './index.css'


function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowIntro(false)
    }, 2000)
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={showIntro ? <IntroPage /> : <Home />} />
      </Routes>
    </Router>
  );
}

export default App;
