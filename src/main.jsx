
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Padia from './Padia.jsx';
import Didi from './Didi.jsx';
import IngenieriaSoftware from './IngenieriaSoftware.jsx';
import Bitmind from './Bitmind.jsx';
import Devseed from './Devseed.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/padia" element={<Padia />} />
        <Route path="/didi" element={<Didi />} />
        <Route path="/ingenieria-software" element={<IngenieriaSoftware />} />
        <Route path="/bitmind" element={<Bitmind />} />
        <Route path="/devseed" element={<Devseed />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
