import { useState } from "react";
import { useLoginMutation, useRegisterMutation } from "./authSlice";
import { useNavigate } from "react-router-dom";

/** AuthForm allows a user to either login or register for an account. */
function AuthForm() {
  const navigate = useNavigate();

  // Handles swapping between login and register
  const [isLogin, setIsLogin] = useState(true);
  const authAction = isLogin ? "Login" : "Register";
  const altCopy = isLogin
    ? "Need an account? Register here."
    : "Already have an account? Login here.";

  const [login, { error: loginError }] = useLoginMutation();
  const [register, { error: registerError }] = useRegisterMutation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const attemptAuth = async (evt) => {
    evt.preventDefault();

    const authMethod = isLogin ? login : register;
    const credentials = { email, password };

    try {
      await authMethod(credentials).unwrap();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>{authAction}</h1>
      <form onSubmit={attemptAuth}>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
            autoComplete="email"
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
            autoComplete="current-password"
          />
        </label>
        <button>{authAction}</button>
      </form>
      <a href="#" onClick={() => setIsLogin(!isLogin)}>
        {altCopy}
      </a>
      {isLogin && loginError && <p role="alert">{loginError}</p>}
      {!isLogin && registerError && <p role="alert">{registerError}</p>}
    </>
  );
}

export default AuthForm;
