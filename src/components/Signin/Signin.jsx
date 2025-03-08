import s from "./Signin.module.css";

const Signin = () => {
  return (
    <div className={s.signinContainer}>
      <h2 className={s.signinTitle}>Sign In</h2>
      <form className={s.signinForm}>
        <div className={s.inputGroup}>
          <label htmlFor="email" className={s.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className={s.input}
          />
        </div>
        <div className={s.inputGroup}>
          <label htmlFor="password" className={s.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className={s.input}
          />
        </div>
      </form>
      <button type="submit" className={s.signinButton}>
        Sign In
      </button>
      <p className={s.signupText}>
        Don’t have an account?{" "}
        <a href="#" className={s.signupLink}>
          Sign Up
        </a>
      </p>
    </div>
  );
};

export default Signin;
