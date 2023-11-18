import React, { useEffect } from 'react';
import { SubmitBtn } from './Login.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginThunk } from 'components/Redux/thunk';

const Login = () => {
  const isAuth = useSelector(state => state.auth.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    isAuth && navigate('/');
  }, [isAuth, navigate]);

  const handleSubmit = e => {
    e.preventDefault();
    const User = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };
    dispatch(loginThunk(User));
  };
  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="exampleInputEmail">Email address</label>
          <input
            name="email"
            type="email"
            id="exampleInputEmail"
            aria-describedby="emaiHelp"
          />
          <div>We'll newer share your email with anyone else</div>
        </div>

        <div>
          <label htmlFor="exampleInputPassword">Password</label>
          <input
            name="password"
            type="password"
            id="exampleInputpassword"
            aria-describedby="emaiHelp"
            placeholder="min 7"
            autoComplete="current-password"
          />
        </div>
        <SubmitBtn width="100" type="submit">
          Send
        </SubmitBtn>
      </form>
    </div>
  );
};

export default Login;
