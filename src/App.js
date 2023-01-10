import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import './App.css';
import { NavigationBar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './components/Home/home';
import { Trips } from './components/Viajes/trips';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/viajes" element={<Trips/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
