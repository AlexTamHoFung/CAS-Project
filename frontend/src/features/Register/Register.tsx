import { useForm } from "react-hook-form";
import "./Register.css";

import { useNavigate, Link } from "react-router-dom";
import { registerThunk } from "../auth/authSlice";
import { useAppDispatch } from "../../app/hook";

export type RegisterFormValues = {
  name: string;
  email: string;
  password: string;
  phone: string;
};

const Register = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    defaultValues: { name: "", email: "", password: "", phone: "" },
  });
  const navigate = useNavigate();

  register("name", { required: { value: true, message: "this is required" } });
  register("email", { required: true });
  register("password", { required: true, minLength: 6 });
  register("phone", { required: true, minLength: 8, maxLength: 8 });

  const submitHandler = async (data: RegisterFormValues) => {
    dispatch(registerThunk(data)).then(() => navigate("/"));
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
            <br />
            <input type="text" {...register("name", { required: true })} />
            {errors.name && <p className="error">Name is required</p>}
          </p>

          <p>
            <label>Password </label>
            <br />
            <input
              type="password"
              {...register("password", { required: true, minLength: 6 })}
            />
            {errors.password && <p className="error">Minimun length is 6</p>}
          </p>

          <p>
            <label>Email </label>
            <br />
            <input type="email" {...register("email", { required: true })} />
            {errors.email && <p className="error">Email is required</p>}
          </p>

          <p>
            <label>PhoneNumber </label>
            <br />
            <input
              type="integer"
              {...register("phone", {
                required: true,
                minLength: 8,
                maxLength: 8,
              })}
            />
            {errors.phone && <p className="error">Not valid phone number</p>}
          </p>

          <input type="submit" value="submit" />

          <Link to="/login" style={{ color: "white" }}>
            Back
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Register;