import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import Layout from './pages/Layout.tsx';
import Home from './pages/Home.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoPage from './pages/NoPage.tsx';
import Contact from './pages/Contact.tsx';
import About from './pages/About.tsx';
import Services from './pages/Services.tsx';
import Terms from './pages/legal/Terms.tsx';
import Privacy from './pages/legal/Privacy.tsx';

const App = () => {
  // Retrieve the theme from localStorage or use 'dark' as the default
  const storedTheme = localStorage.getItem('theme') || 'media';

  // State to manage the theme
  const [theme, setTheme] = useState(storedTheme);

  // Effect to update the localStorage when the theme changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout theme={theme} updateTheme={setTheme} />} >
            <Route index element={<Home theme={theme} updateTheme={setTheme} />} />
            <Route path="home" element={<Home theme={theme} updateTheme={setTheme} />} />
            <Route path="contact" element={<Contact/>} />
            <Route path="about" element={<About/>} />
            <Route path="services" element={<Services/>} />
            <Route path="legal/terms" element={<Terms/>} />
            <Route path="legal/privacypolicy" element={<Privacy />} />
            <Route path="*" element={<NoPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
