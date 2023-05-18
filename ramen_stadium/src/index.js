import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import ReactModal from "react-modal";

ReactModal.setAppElement('#root');
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)