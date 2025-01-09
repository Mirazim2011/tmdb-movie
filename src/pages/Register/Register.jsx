import { useContext, useState } from "react";
import FieldInput from "../../components/FieldInput/FieldInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Auth";

function Register() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      required: true,
      label: "Username",
      htmlFor: "username",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Invalid Email!",
      required: true,
      label: "Email",
      htmlFor: "email",
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
      htmlFor: "birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      pattern: `^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number, and 1 special character!",
      required: true,
      label: "Password",
      htmlFor: "password",
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      required: true,
      label: "Confirm Password",
      htmlFor: "confirmPassword",
    },
  ];
  const navigate = useNavigate();
  const { setIsAuthorizated } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://reqres.in/api/register", {
        email: values.email,
        password: values.password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        setIsAuthorizated(true);
        navigate("/");
      });
  };
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#d3c0f9] to-[#f0b3e1]">
        <div className="w-[380px] bg-white p-4 rounded-xl shadow-lg">
          <h1 className="text-center text-[#5f0361] font-bold text-4xl sm:text-5xl">
            Register
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col mt-4">
            {inputs.map((input) => (
              <div key={input.id} className="mb-4">
                <FieldInput
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  {...input}
                  onChange={handleChange}
                  value={values[input.name]}
                />
              </div>
            ))}
            <button
              className="mt-4 text-white font-bold text-lg bg-[#663398] py-2 rounded-lg hover:bg-[#5a2b87] transition"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;