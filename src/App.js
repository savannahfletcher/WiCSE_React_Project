import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/pages/Home';
import Projects from './component/pages/Projects';
import Experiences from './component/pages/Experience';
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/experience" element={<Experiences/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
