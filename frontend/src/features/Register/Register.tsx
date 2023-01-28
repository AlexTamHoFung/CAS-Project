import { type } from 'os'
import React, {useState} from 'react'
import { useForm } from 'react-hook-form'

type FormValues = {
    name: string,
    email: string,
    password: string,
    phone: number,
}

const Register = () => {

   const {register, handleSubmit, formState: {errors} } = useForm<FormValues>({
    defaultValues: {
        name: "",
        email: "",
        password: "",
        phone: +"",
    }
   });

   register("name", {
    required: {
        value: true,
        message: "this is required"
    }
    });
    
   register("email", {required: true});
   register("password", {minLength: 6});
   register("phone", {maxLength: 8, minLength: 8});

  return (
    <div className="container">
        <div className="app-wrapper">
            <div>
                <h1 className="title">
                    Create Account
                </h1>
            </div>
            <form className="form-wrapper">
                <div className="label"></div>
            </form>

        </div>

    </div>
  )
}

export default Register