import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Hero from './components/Hero';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Services from './components/Services';
function App() {
  return (
    <div className="App">
      <Navbar />
     <HeroSection/>
      <Services />
      <AboutUs />
      <ContactUs />
      <Footer/>
    </div>
  );
}

export default App;
