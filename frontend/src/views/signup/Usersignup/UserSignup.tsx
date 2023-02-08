import React from "react";

import Header from "../../../features/Header/Header";
import './UserSignup.css';

export default function UserSignup() {
  return (
    <div>
      <Header />

      <form>
        <label className="logincontainer">
        *帳號名稱:<br/>
         <input type="text" name="username" className="submitbox"/> <br/>
         *密碼:<br/>
         <input type="text" name="password" className="submitbox" /> <br/>
         {/* <a href="">忘記密碼?</a> */}

        </label>
        <br/>
        <input type="submit" value="登入" className="button" />
      </form>
    </div>
  );
}
