import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Description from './pages/Description/Description';
import Comparador from './pages/Comparador/Comparador';
 
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/description" element={<Description />} />
        <Route path="/comparador" element={<Comparador />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
