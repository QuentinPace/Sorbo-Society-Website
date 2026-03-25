import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/user";
import { useState } from "react";
import "./SignUpPage.css";

const SignUpPage = () => {
  const { user, signup } = useUserStore();
  const navigate = useNavigate();
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let [username, setUsername] = useState("");
  let [errors, setErrors] = useState(null);

  const handleSignup = async (email, password, username) => {
    const res = await signup(email, password, username);
    console.log(res);
    if (res) {
      setErrors(res.errors);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <main className="signup">
      <section className="signup-container">
        <div className="signup-form">
          <h1 className="welcome-text">Welcome to Mayqo</h1>
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
          <div className="input-container">
            <label>Username</label>
            <input
              placeholder="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <p className="error">
              {errors && errors.username ? errors.username : ""}
            </p>
          </div>
          <button onClick={() => handleSignup(email, password, username)}>
            signup
          </button>
          <p className="navigate-login">
            Already have an account?{" "}
            <span onClick={() => navigate("/login")}>Login</span>
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

export default SignUpPage;
