import "./App.css";
import Navbar from "./components/pages/Navbar";
import Hero from "./components/pages/Hero";
import Work from "./components/pages/Work";
import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/pages/ContactUs";
import Footer from "./components/pages/Footer";
import ClientPartner from "./components/pages/ClientPartner";
import SocialIcon from "./components/pages/SocialIcon";

function App() {
  return (
    <>
      {/* The entry point of the react project . */}
      {/* here we are adding all the components so that it will be shown in the website */}
      <div>
        <Navbar />
        <Hero />
        <Work />
        <ClientPartner />
        <AboutUs />
        <ContactUs />
        <SocialIcon />
        <Footer />
      </div>
    </>
  );
}

export default App;
