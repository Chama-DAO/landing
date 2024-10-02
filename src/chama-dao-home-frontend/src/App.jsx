import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar, { MobileNavbar } from "./components/Navbar";
import Landing from "./pages/Landing";
import Footer from "./components/Footer";
import Roadmap from "./pages/Roadmap";
import Features from "./pages/Features";
import Whitepaper from "./pages/Whitepaper";
import ChamaApp from "./pages/ChamaApp";
import ErrorPage from "./components/ErrorPage";
import { initSatellite } from "@junobuild/core";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    (async () =>
      await initSatellite({
        satelliteId: "kmztx-bqaaa-aaaal-amiiq-cai",
      }))();
  }, []);

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
        <Route path="roadmap" element={<Roadmap />} />
        <Route path="features" element={<Features />} />
        <Route path="whitepaper" element={<Whitepaper />} />
        <Route path="app" element={<ChamaApp />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
