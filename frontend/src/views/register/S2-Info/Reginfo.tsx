import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Regheader from "../../../features/Header/Regheader";
import DatePicker from 'react-date-picker';
import "./Reginfo.css";

function UserForm() {
  const { register, handleSubmit, watch, formState: {errors} } = useForm();
  const [value, onChange] = useState(new Date());
  const userIcon = watch('userIcon');
  const [UserIconData,setUserIconData] = useState<null |string>(null);

  useEffect(() => {
    if(userIcon?.length > 0) {
      let photoURL = URL.createObjectURL(userIcon[0]);

      setUserIconData(photoURL)

      return () => {
        URL.revokeObjectURL(photoURL);
      }
    }
  },[userIcon]);


  return (
    <div>
      <form onSubmit={handleSubmit((data) => {
        console.log(data)
      })}>
      
      {UserIconData && <img src={UserIconData}  alt='User Icon'/>}

      <p>* 帳號名稱: <input {...register('username', { required: true})}/><br/>
        { errors.username && <span style={{color:'red'}}> Input your Username</span>}
      </p>

      <p>* 密碼: <input {...register('password', {pattern: /^\d+$/ })} /><br/>
        {errors.password && <span style={{color:'red'}}>Input your password</span>}
      </p>

      <p>* 電郵地址: <input {...register('email', {pattern: /^\d+$/ })} /><br/>
        {errors.email && <span style={{color:'red'}}>Input your password</span>}
      </p>
      


      <p>* 出生日期:
      <DatePicker onChange={onChange} value={value} />
      <br/>
        
      </p>


      <p>User Icon: <input type="file" {...register('userIcon')} /> </p>

      <input type="submit"></input>

      </form>

      </div>
  )
}






export default function Reginfo() {
  return (
    <div>
      <Regheader />

      <UserForm />
    </div>
  );
}
