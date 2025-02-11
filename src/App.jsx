import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/index.jsx";



function App() {
  return (
    <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
            <Footer />
        </Router>
  )
}

export default App
