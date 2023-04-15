import React from 'react';
import App from './app/App';

// create the app
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
// @ts-ignore
createRoot(container).render(<App />);
