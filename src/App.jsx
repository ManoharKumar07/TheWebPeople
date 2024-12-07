import "./App.css";
import Navbar from "./components/pages/Navbar";
import Hero from "./components/pages/Hero";
import Work from "./components/pages/Work";
import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/pages/ContactUs";
import Footer from "./components/pages/Footer";
import ClientPartner from "./components/pages/ClientPartner";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Work />
        <ClientPartner />
        <AboutUs />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}

export default App;
