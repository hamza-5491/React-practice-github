import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Hero/>} />
          <Route exact path="/Hero" element={<Hero/>} />
          <Route exact path="/Features" element={<Features/>} />
          <Route exact path="/Pricing" element={<Pricing/>} />
          <Route exact path="/About" element={<About/>} />
          <Route exact path="/Contact" element={<Contact/>} />
          {/* <Redirect to="/" /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
