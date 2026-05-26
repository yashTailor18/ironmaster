import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";

import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import TrackOrder from "./pages/TrackOrder";
import BookPickup from "./pages/BookPickup";

// SERVICES
import Services from "./pages/services/Services";
import Laundry from "./pages/services/Laundry";
import Ironings from "./pages/services/Ironings";
import DryCleaning from "./pages/services/DryCleaning";
import ShoeCleaning from "./pages/services/ShoeCleaning";
import BlanketCleaning from "./pages/services/BlanketCleaning";

function App() {
  return (
    <BrowserRouter>

      <div className="bg-black text-white min-h-screen">

        <Navbar />

        <Routes>

          {/* MAIN PAGES */}
          <Route path="/" element={<Home />} />

          <Route path="/services" element={<Services />} />

          <Route path="/pricing" element={<Pricing />} />

          <Route path="/track-order" element={<TrackOrder />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/book-pickup" element={<BookPickup />} />

          {/* SERVICES ROUTES */}
          <Route
            path="/services/laundry"
            element={<Laundry />}
          />


          <Route
            path="/services/ironings"
            element={<Ironings />}
          />

          <Route
            path="/services/dry-cleaning"
            element={<DryCleaning />}
          />

          <Route
            path="/services/shoe-cleaning"
            element={<ShoeCleaning />}
          />

          <Route
            path="/services/blanket-cleaning"
            element={<BlanketCleaning />}
          />

        </Routes>
        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;