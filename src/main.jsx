import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const maintenance = true;

const Maintenance = () => (
  <div style={{
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "sans-serif",
    flexDirection: "column"
  }}>
    <h1>🚧 Site Under Maintenance</h1>
    <p>We’ll be back in 1 hour</p>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  maintenance ? <Maintenance /> : <App />
)
