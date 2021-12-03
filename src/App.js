import { BrowserRouter } from "react-router-dom";
import './assets/scss/App.scss';
import Navbar from "./components/Navbar";
import Router from './components/Router';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Router />
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
