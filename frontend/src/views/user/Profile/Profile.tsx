
import React, { useState } from 'react';
import UserHeader from '../../../components/userheader/UserHeader';
import BottomNav from '../../../features/BottomNav/BottomNav';


export default function Profile() {

  const [email, setEmail] = useState("");
  return (
    <div>
      <UserHeader/>

      <input 
      id= "email"
      type="string"
      value={email}
      
      
      />
      <BottomNav/>
    </div>
  );
}
