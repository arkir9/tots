import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Content from './components/Content';
import Footer from './components/Footer';
import MyWork from './components/MyWork';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#060407]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Content />
              </>
            } />
            <Route path="/work" element={<MyWork />} />
            {/* Add other routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
