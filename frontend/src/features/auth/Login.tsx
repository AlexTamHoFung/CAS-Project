// import React, { useState } from "react";
// import { loginThunk } from "./authSlice";
// import { useAppDispatch } from "../../app/hook";
// import { useNavigate } from "react-router-dom";



// export function Login(){
//     const navigate = useNavigate();
//     const [name, setName] = useState("");
//     const [password, setPassword] = useState("");

//     const dispatch = useAppDispatch();
//     const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         dispatch(loginThunk({ name, password }))
//         .unwrap()
//         .then(() => navigate("/"))
//         .catch((err) => {
//             alert(err.message);
//         });
//     };
//     return (
//         <form onSubmit={submitHandler}>
//           <h3>Login</h3>
//           <div>
//             <label htmlFor="username">Username</label>
//             <input
//               id="username"
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             ></input>
//             <input
//               id="password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             ></input>
//           </div>
    
//           <input type="submit" value="submit"></input>
//         </form>
//       );
 
// }

import React from 'react'

export default function Login() {
  return (
    <div>Login</div>
  )
}
