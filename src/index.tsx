import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.tsx'; // 确保导入 App
import './index.css';

// Firebase imports
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAbh_OpiB1RddfEFkQFGQ-66oNrdi9FLZY',
  authDomain: 'funnel-editor-demo.firebaseapp.com',
  projectId: 'funnel-editor-demo',
  storageBucket: 'funnel-editor-demo.firebasestorage.app',
  messagingSenderId: '304895960294',
  appId: '1:304895960294:web:967e2af5dcc0b6cf2e4727',
  measurementId: 'G-RVRL76REP7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Create a React root
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// Render the application
root.render(
  <React.StrictMode>
    <HashRouter>
      <App db={db} />
    </HashRouter>
  </React.StrictMode>
);
