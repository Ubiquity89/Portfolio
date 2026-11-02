import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Home from '@/pages/Home';
import { ThemeProvider } from '@/contexts/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col">
          <Navbar />
          <main>
            <Home />
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
