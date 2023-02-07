import { useForm } from "react-hook-form";
import { useEffect } from "react";
import "./Register.css";
// import { useNavigate } from 'react-router';

type FormValues = {
  name: string;
  email: string;
  password: string;
  phone: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { name: "", email: "", password: "", phone: "" },
  });

  // const navigate = useNavigate();

  register("name", { required: { value: true, message: "this is required" } });
  register("email", { required: true });
  register("password", { required: true, minLength: 6 });
  register("phone", { required: true, minLength: 8, maxLength: 8 });

  useEffect(() => {
    let sub = watch(async (data) => {
      console.log("formdata: ", data);
      const { REACT_APP_API_BASE } = process.env;
      const jsonData = {
        name: data.name,
        email: data.email,
        password: data.password,
        phone: data.phone,
      };
      const resp = await fetch(`${REACT_APP_API_BASE}/customers/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData),
      });
      const respData = await resp.json();
      console.log("respData: ", respData);
    });
    return () => sub.unsubscribe();
  }, [watch]);

  const submitHandler = async (data: FormValues) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("password", data.password);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
  };

  return (
    <div className="reg-container">
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="reg-headerTitle">
          <img src={require("./logo.png")} alt="logo" height={"80rem"} />
          <h3>Register</h3>
        </div>

        <span className="reg-form-row">
          <p>
            <label>Name</label>
            <br/>
            <input type="text" {...register("name", { required: true })} />
            {errors.name && <p className="error">？</p>}
          </p>

          <p>
            <label>Password </label>
            <br/>
            <input type="text" {...register("password", { required: true })} />
            {errors.password && <p className="error">？</p>}
          </p>

          <p>
            <label>Email </label>
            <br/>
            <input type="text" {...register("email", { required: true })} />
            {errors.email && <p className="error">？</p>}
          </p>

          <p>
            <label>PhoneNumber </label>
            <br/>
            <input type="integer" {...register("phone", { required: true })} />
            {errors.phone && <p className="error">？</p>}
          </p>

          <input type="submit" value="submit" />
        </span>
      </form>

      {/* <div className="app-wrapper">
        <div>
          <h1 className="title">Create Account</h1>
        </div>
        <form className="form-wrapper">
          <div className="label"></div>
        </form>
      </div> */}
    </div>
  );
};

export default Register;

// export default function Register() {
//   return (
//     <div>Reg Page</div>
//   )
// }
