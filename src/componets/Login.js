import React from "react";
// import { Link } from "react-router-dom";
// import Navbar from "../../COMPONENTS/Navbar/Navbar";
import login from "../images/login.jpg";
import "./AuthPage.css";
const Login = () => {
  return (
    <div className="authpage">
      {/* <Navbar reloadnavbar={false} /> */}

      <div className="authcont">
        <img src={login} alt="login" />

        <form className="authform">
          <h1>Login</h1>
          <div className="formgroup">
            <label to="email">Email</label>
            <input type="email" id="email" />
          </div>

          <div className="formgroup">
            <label to="password">Password</label>
            <input type="password" id="password" />
          </div>

          <div className="formgroup">
            <label htmlFor="fruit">Fruit: </label>
            <select
              id="fruit"
              name="fruit"
              // value={fruit}
              // onChange={handleFruitChange}
            >
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </div>

          {/* <Link to="/forgotpassword" className="stylenone"> */}
          <p>Forgot password?</p>
          {/* </Link> */}
          {/* <Link to="/" className="stylenone"> */}
          <button className="btn">Login</button>
          {/* </Link> */}
          <h2 className="or">OR</h2>
          {/* <Link to="/signup" className="stylenone"> */}
          <button className="btn">Signup</button>
          {/* </Link> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
