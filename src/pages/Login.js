import { authConstants } from 'app/redux/constants';
import React from 'react';
import { useDispatch } from 'react-redux';
const { LOGIN_SUCCESS } = authConstants;
const Login = () => {
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        name: 'Tst',
        id: '12344',
      },
    });
  };

  return (
    <section className="section">
      <div className="container">
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <div className="fadeIn first">
              <img
                src="http://danielzawadzki.com/codepen/01/icon.svg"
                id="icon"
                alt="User Icon"
              />
            </div>
            <form noValidate={true}>
              <input
                type="text"
                id="login"
                className="fadeIn second"
                name="login"
                placeholder="login"
              />
              <input
                type="text"
                id="password"
                className="fadeIn third"
                name="login"
                placeholder="password"
              />
              <input
                onClick={handleLogin}
                className="btn btn-outline-dark btn-sm"
                value="Log In"
              />
            </form>
            <div id="formFooter">
              <a className="underlineHover" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
