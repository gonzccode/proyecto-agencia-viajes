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
import { Ayuda } from './components/Ayuda/ayuda';
import { FrequentyQuestions } from './components/Ayuda/frequentyQuestions';
import { UsefulInformation } from './components/Ayuda/usefulInformation';
import { PayBenefits } from './components/Ayuda/payBenefits';
import { Nosotras } from './components/Nosotras/nosotras';
import { Contacto } from './components/Contacto/contacto';

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
            <Route path="/preguntas-frecuentes" element={<FrequentyQuestions/>}/>
            <Route path="/informacion-util" element={<UsefulInformation/>}/>
            <Route path="/formas-pago" element={<PayBenefits/>}/>
            <Route path="/nosotras" element={<Nosotras/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
