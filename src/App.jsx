import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Menu from './components/Menu';
import FeaturedPromo from './components/FeaturedPromo';
import Events from './components/Events';
import About from './components/About';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <Menu />
      <FeaturedPromo />
      <Events />
      <About />
      <Contact />
    </>
  );
}
