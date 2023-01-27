import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import UserSignup from './views/signup/Usersignup/UserSignup';




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>


   <UserSignup />
  </React.StrictMode>
);

