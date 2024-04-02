import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

export default function SignUp() {
  const [formState, setFormState] = useState({ email: '', password: '', firstName: '', lastName: '', phoneNumber: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: formState
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <div>
      <div>
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="firstName"
              required
              placeholder="First Name"
              value={formState.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              required
              placeholder="Last Name"
              value={formState.lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              value={formState.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formState.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              required
              placeholder="Password"
              value={formState.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div>
        <p>Already have an account? <a href="/">Sign in</a></p>
      </div>
    </div>
  );
}
