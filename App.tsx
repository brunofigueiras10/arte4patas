import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen relative font-sans text-gray-900 selection:bg-brand-yellow selection:text-white bg-[#f3f4f6]">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </main>
  );
};

export default App;