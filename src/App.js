import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
 
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
