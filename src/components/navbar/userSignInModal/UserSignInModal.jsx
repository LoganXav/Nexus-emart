// STYLES IMPORT
import "./UserSignInModal.scss";

// HOOKS IMPORTS
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// REDUCER ACTIONS IMPORTS
import {
  loginStart,
  loginSuccess,
  loginFail,
} from "../../../redux/userReducer";

// HTTP REQUEST IMPORT
import { makeRequest } from "../../../makeRequest";

const UserSignInModal = ({
  userOpen,
  setUserOpen,
}) => {
  // INVOKES USEDISPATCH HOOK FOR REDUCER ACTIONS
  const dispatch = useDispatch();
  
  // INVOKES USESELECTOR HOOK TO ACCESS GLOBAL STATE
  const { error } = useSelector((state) => state.user)

  // INVOKES USENAVIGATE HOOK FOR NAVIGATION
  const navigate = useNavigate();

  // HANDLES USER REGISTER
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      dispatch(loginStart());
      const res = await makeRequest.post("/auth/local/register", inputs, {
        headers: {
          Authorization: "bearer " + import.meta.env.VITE_APP_API_TOKEN,
        },
      });
      dispatch(loginSuccess(res.data));
      setInputs({
        username: "",
        email: "",
        password: "",
      });
      setUserOpen(false);
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      dispatch(loginFail());
    }
  };

  //  HANDLES USER SIGN IN
  const [signInInputs, setSignInInputs] = useState({
    identifier: "",
    password: "",
  });

  const handleInput = (e) => {
    setSignInInputs({ ...signInInputs, [e.target.name]: e.target.value });
  };

  const handleSignIn = async () => {
    try {
      dispatch(loginStart());
      const res = await makeRequest.post("/auth/local", signInInputs, {
        headers: {
          Authorization: "bearer " + import.meta.env.VITE_APP_API_TOKEN,
        },
      });
      dispatch(loginSuccess(res.data));
      setSignInInputs({});
      setUserOpen(false);
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      dispatch(loginFail());
    }
  };

  // HANDLES OPENING AND CLOSING MODAL
  const modalRef = useRef();
  const signinRef = useRef(null);
  const registerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setUserOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  // HANDLES SWITCHING BETWEEN RESIATER AND SIGN IN
  const [userRegister, setUserRegister] = useState(false);
  function handleSigninClick() {
    setUserRegister(false);
    signinRef.current.classList.remove("inactive");
    registerRef.current.classList.remove("active");
  }

  function handleRegisterClick() {
    setUserRegister(true);
    registerRef.current.classList.add("active");
    signinRef.current.classList.add("inactive");
  }

  // HANDLES PASSWORD VISIBILITY
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {userOpen && (
        <div className="user-container">
          <div ref={modalRef} className="user">
            <div className="top">
              <button
                onClick={handleSigninClick}
                ref={signinRef}
                className="signin"
              >
                Sign in
              </button>
              <button
                onClick={handleRegisterClick}
                ref={registerRef}
                className="register"
              >
                Register
              </button>
            </div>
            {!userRegister ? (
              <div className="bottom">
                <label htmlFor="Username Or Email">Username Or Email</label>
                <input
                  placeholder="Username"
                  onChange={handleInput}
                  name="identifier"
                  value={
                    signInInputs.identifier !== null
                      ? signInInputs.identifier
                      : ""
                  }
                  type="text"
                />
                <label htmlFor="Password">Password</label>
                <div className="password">
                  <input
                    id="input"
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    value={
                      signInInputs.password !== null
                        ? signInInputs.password
                        : ""
                    }
                    name="password"
                    onChange={handleInput}
                  />
                  {showPassword ? (
                    <i
                      onClick={toggleShowPassword}
                      className="ri-eye-off-line"
                    ></i>
                  ) : (
                    <i onClick={toggleShowPassword} className="ri-eye-line"></i>
                  )}
                </div>
                <div className="forgot">
                  <div className="left">
                    <input type="checkbox" />
                    <span>Remember me</span>
                  </div>
                  <span>
                    <a>Lost your password?</a>
                  </span>
                </div>
                {error && <span>Invalid email or password.</span>}
                <button onClick={handleSignIn}>Login</button>
              </div>
            ) : (
              <div className="bottom">
                <label htmlFor="Username Or Email">Username *</label>
                <input
                  name="username"
                  value={inputs.username !== null ? inputs.username : ""}
                  onChange={handleChange}
                  placeholder="Username"
                  type="text"
                />
                <label htmlFor="Email">Email Address *</label>
                <input
                  name="email"
                  value={inputs.email !== null ? inputs.email : ""}
                  onChange={handleChange}
                  placeholder="Email Address"
                  type="email"
                />
                <label htmlFor="Password">Password *</label>
                <div className="password">
                  <input
                    id="input"
                    name="password"
                    value={inputs.password !== null ? inputs.password : ""}
                    onChange={handleChange}
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                  />
                  {showPassword ? (
                    <i
                      onClick={toggleShowPassword}
                      className="ri-eye-off-line"
                    ></i>
                  ) : (
                    <i onClick={toggleShowPassword} className="ri-eye-line"></i>
                  )}
                </div>
                <div className="forgot">
                  <p>
                    Your personal data will be used to support your experience
                    throughout this website.
                  </p>
                </div>
            
                <button onClick={handleRegister}>Register</button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default UserSignInModal;
