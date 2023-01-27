import React, {useState} from 'react'

const Register = () => {
    // const [values, setValues] = useState({
    //     fullname: "",
    //     email: "",
    //     password: "",
    //     phone: "",
    // });

    // const handleChange = (event: { target: { name: any; value: any; }; }) =>{
    //     setValues({
    //         ...values,
    //         [event.target.name]: event.target.value,
    //     });
    // };

    // const handleRegister = (event: { preventDefault: any; }) => {
    //     event.preventDefault();

    // }


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