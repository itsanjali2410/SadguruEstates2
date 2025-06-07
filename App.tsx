
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './src/components/Navbar';
import Footer from './src/components/Footer';
import HomePage from './src/pages/HomePage';
import PropertiesPage from './src/pages/PropertiesPage';
import AboutPage from './src/pages/AboutPage';
import BlogPage from './src/pages/BlogPage';
import ContactPage from './src/pages/ContactPage';
import NotFoundPage from './src/pages/NotFoundPage';
import ScrollToTop from './src/components/ScrollToTop';

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/properties" element={<PropertiesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
