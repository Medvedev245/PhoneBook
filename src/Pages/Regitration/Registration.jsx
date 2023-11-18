import React from 'react';
import { SubmitBtn } from './registration.styled';
import { signUp } from 'components/Redux/authServise';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };

    signUp(newUser)
      .then(() => {
        console.log('success');
        Notify.success('User ADD');
        navigate('/login');
      })
      .catch(error => {
        console.log(error);
        Notify.failure('we can not create something like this :(');
      });
  };

  return (
    <div>
      <h1>Registration</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="exampleInputName">Name</label>
          <input
            name="name"
            type="text"
            id="exampleInputName"
            aria-describedby="emaiHelp"
          />
          <div>Write name</div>
        </div>

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

export default Registration;
