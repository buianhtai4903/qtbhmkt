import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LoginPage from './pages/login';
import RegisterPage from './pages/resgister';
import HomePage from './pages/home';
import Layout from './components/layouts/layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Router>
      <Routes>

        <Route path="/login" element={<LoginPage />} />
        <Route path="resgister" element={<RegisterPage />} />

        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />

        </Route>

      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
