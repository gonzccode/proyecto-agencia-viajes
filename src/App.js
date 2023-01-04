import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavigationBar } from './components/Navbar';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Footer/>
    </div>
  );
}

export default App;
