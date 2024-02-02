import React from 'react';
import ReactDOM from 'react-dom/client';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-indigo/theme.css';  
import 'primeflex/primeflex.css';                                  
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';                    
import './index.module.scss';

import App from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
const root = ReactDOM.createRoot(rootElement);
root.render(
    <React.StrictMode>
        <PrimeReactProvider>
            <App />
        </PrimeReactProvider>
    </React.StrictMode>
);
} else {
    console.error("Элемент 'root' не найден в документе.");
}

