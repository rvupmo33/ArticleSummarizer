import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import News from "./pages/News";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/News" element={<News />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
