import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

export default function LoginPage() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password }
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div style={{ height: '100vh', display: 'flex' }}>
      <div
        style={{
          backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#f5f5f5',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          flex: '1'
        }}
      />
      <div style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div>
          <h1 style={{ textAlign: 'center' }}>Sign in</h1>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formState.email}
                onChange={handleChange}
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                value={formState.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit" style={{ width: '100%', padding: '0.5rem', backgroundColor: '#1976D2', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Sign In</button>
          </form>
          <p style={{ marginTop: '1rem', textAlign: 'center' }}>Don't have an account? <a href="/signup" style={{ color: '#1976D2' }}>Sign Up</a></p>
        </div>
      </div>
    </div>
  );
}
