import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "../login/login.css";

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // eslint-disable-next-line no-unused-vars
  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/token/",
        formData,
      );

      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);

      alert("Login Successful");
      navigate("/dashboard");
    } catch (err) {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>

      <input
        type="text"
        placeholder="Username"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />

      <Link to="/chat">
  <button>Login</button>
</Link>

      <p>Create New Account</p>

      <p>Forgot Password?</p>
      <Link to="/home">
        <button onClick={() => null}>Home</button>
      </Link>
    </div>
  );
};

export default Login;
