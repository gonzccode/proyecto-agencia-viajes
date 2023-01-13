import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import './App.css';
import { NavigationBar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './components/Home/home';
import { Ayuda } from './components/Ayuda/ayuda'

function App() {
  return (
    <div className="App">
      <NavigationBar/>
        {/* <Home/> */}
        <Ayuda/>
      <Footer/>
    </div>
  );
}

export default App;
