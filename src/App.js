import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavigationBar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './components/Home/home';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
        <Home/>
      <Footer/>
    </div>
  );
}

export default App;
