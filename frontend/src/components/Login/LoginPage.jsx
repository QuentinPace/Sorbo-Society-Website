import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { useUserStore } from "../../store/user";
import { useState } from "react";

const LoginPage = () => {
  const { user, login } = useUserStore();
  const navigate = useNavigate();
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let [errors, setErrors] = useState(null);

  const handleLogin = async (email, password) => {
    const res = await login(email, password);
    console.log(res);
    if (res) {
      setErrors(res.errors);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <main className="login">
      <section className="login-container">
        <div className="login-form">
          <h1 className="welcome-text">Welcome back</h1>
          <div className="input-container">
            <label>Email</label>
            <input
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="error">
              {errors && errors.email ? errors.email : ""}
            </p>
          </div>
          <div className="input-container">
            <label>Password</label>
            <input
              placeholder="password"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="error">
              {errors && errors.password ? errors.password : ""}
            </p>
          </div>
          <button onClick={() => handleLogin(email, password)}>login</button>

          <p className="navigate-signup">
            Don't have an account?{" "}
            <span onClick={() => navigate("/signup")}>Sign up</span>
          </p>
          <p className="error">
            {errors && errors.message ? errors.message : ""}
          </p>
        </div>
      </section>
      <section className="display-container"></section>
    </main>
  );
};

export default LoginPage;
