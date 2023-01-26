import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Regqrcode from './views/register/S3-Qrcode/Regqrcode';




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>


   <Regqrcode />
  </React.StrictMode>
);

