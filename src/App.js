import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <ContactUs />
      <Footer/>
    </div>
  );
}

export default App;
