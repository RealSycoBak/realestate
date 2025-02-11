import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/index.jsx";
import About from "./pages/about.jsx";
import Portfolio from "./pages/portfolio.jsx";
import Students from "./pages/students.jsx";
import News from "./pages/news.jsx";



function App() {
  return (
    <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/students" element={<Students />} />
                <Route path="/news" element={<News />} />
            </Routes>
            <Footer />
        </Router>
  )
}

export default App
