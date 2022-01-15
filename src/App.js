import React from 'react';
import "tailwindcss/tailwind.css";
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Work from './components/Work/Work';

const App = () => {
  return (
    <main>
      <Navbar/>
      <Banner/>
      <About/>
      <Work/>
      <Contact/>
      <Footer/>
    </main>
  );
}

export default App;
