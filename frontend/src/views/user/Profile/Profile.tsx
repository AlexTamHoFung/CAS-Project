import React, { useState } from "react";
import UserHeader from "../../../components/userHeader/UserHeader";
import BottomNav from "../../../features/BottomNav/BottomNav";

export default function Profile() {
  const [email, setEmail] = useState("");
  return (
    <div>
      <UserHeader />
      <br />
      <br />
      <br />
      <br />
      <br />

      <input id="email" type="string" value={email} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <BottomNav />
    </div>
  );
}
