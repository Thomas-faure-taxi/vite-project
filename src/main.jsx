// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


// src/main.jsx
import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { App } from './App';

const tasks = window.__INITIAL_DATA__;

hydrateRoot(document.getElementById('root'), <App tasks={tasks} />);
