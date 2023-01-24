import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import './App.css';
import { NavigationBar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './components/Home/home';
import { Trips } from './components/Viajes/trips';
import { TripDetailContainer } from './components/Home/tripDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Ayuda } from './components/Ayuda/ayuda'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/viajes" element={<Trips/>} />
            <Route path="/detalle/:id" element={<TripDetailContainer />} />
            <Route path="/viajes/detalle/:id" element={<TripDetailContainer />} />
            <Route path="/ayuda" element={<Ayuda/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
