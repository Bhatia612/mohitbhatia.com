import { useEffect, useState } from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HowIBuild from './pages/HowIBuild';
import Nav from './components/Nav';
import IntroPage from './components/IntroPage';
import './index.css'


function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowIntro(false)
    }, 2500)
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={showIntro ? <IntroPage /> : <div className="main">
          <Nav />
          <div className="contentCont">
            <HowIBuild />
          </div>
        </div>} />
      </Routes>
    </Router>
  );
}

export default App;
