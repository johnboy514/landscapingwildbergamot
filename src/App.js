import './App.css';
import { BrowserRouter as Router,  Route,  Routes,  Navigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Services from "./components/Services";
import RequestAQuote from './components/RequestAQuote';


function App() {
  return (
    <div className="App">
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/request-a-quote" element={<RequestAQuote />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
    </Router>
    </div>
  );
}

export default App;
