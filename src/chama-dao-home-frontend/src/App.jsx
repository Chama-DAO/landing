import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar, { MobileNavbar } from "./components/Navbar";
import Landing from "./pages/Landing";
import FAQs from "./pages/FAQs";
import Footer from "./components/Footer";
import Roadmap from "./pages/Roadmap";
import Features from "./pages/Features";
import Whitepaper from "./pages/Whitepaper";
import ChamaApp from "./pages/ChamaApp";

function App() {
  return (
    <Router>
      <div className="hidden md:block w-[100%] z-10">
        <Navbar />
      </div>
      <div className="flex md:hidden w-full z-10">
        <MobileNavbar />
      </div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="roadmap" element={<Roadmap />} />
        <Route path="features" element={<Features />} />
        <Route path="whitepaper" element={<Whitepaper />} />
        <Route path="app" element={<ChamaApp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
