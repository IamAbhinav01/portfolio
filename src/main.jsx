import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// animation on scroll library
import AOS from 'aos';
import 'aos/dist/aos.css';

// initialize AOS when app loads
AOS.init({
  duration: 800,
  once: true,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
