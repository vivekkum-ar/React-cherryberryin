import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import Layout from './pages/Layout.tsx';
import Home from './pages/Home.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  const [theme, setTheme] = useState('media'); // Replace 'default' with your initial theme

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Layout theme={theme} updateTheme={setTheme} />}
          >
            <Route
              index
              element={<Home theme={theme} updateTheme={setTheme} />}
            />
            <Route
              path="home"
              element={<Home theme={theme} updateTheme={setTheme} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
