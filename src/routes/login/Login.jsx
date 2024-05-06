import { useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Toast from 'components/ux/toast/Toast';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    
    const { email, password } = loginData;
    if (!email || !password) {
      setErrorMessage('Please enter both email and password');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:4000/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.status===200) {
        const { token } = await response.json();
        // Store the token in local storage
        alert('Login successful!');
        localStorage.setItem('token', JSON.stringify(token));
        navigate('/');
      } else {
        setErrorMessage('Invalid  email or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setErrorMessage('An error occurred while logging in');
    }
  };
  
  

  const isLoggedIn = () => {
    // Check if user is logged in based on the presence of token
    return !!localStorage.getItem('token');
  };

  const dismissError = () => {
    setErrorMessage('');
  };
  return (
    <>
      <div className="login__form ">
        <div className="  container mx-auto p-4 flex justify-center items-center min-h-[600px] sm:max-h-screen  
">
          <form
            onSubmit={handleLoginSubmit}
            className="w-half sm:w-1/2 max-w-md p-4 md:p-10 shadow-md"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-black">
                Welcome Back
              </h2>
              <p className="text-gray-500">
                Log in to continue to your account
              </p>
            </div>
            <div className="mb-6">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={loginData.email}
                onChange={handleInputChange}
                autoComplete="username"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={loginData.password}
                onChange={handleInputChange}
                autoComplete="current-password"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              />
            </div>
            {errorMessage && (
              <Toast
                type="error"
                message={errorMessage}
                dismissError={dismissError}
              />
            )}

            
            <div className="items-center">
              <div>
                <button
                  type="submit"
                  className="bg-brand hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                >
                  Log In
                </button>
              </div>
              <div className="flex flex-wrap justify-center my-3 w-full">
                <Link
                  to="/forgot-password"
                  className="inline-block align-baseline text-md text-gray-500 hover:text-blue-800 text-right"
                >
                  Forgot your password?
                </Link>
              </div>
              <div className="relative">
                <div className="absolute left-0 right-0 flex justify-center items-center">
                  <div className="border-t w-full absolute"></div>
                  <span className="bg-white px-3 text-gray-500 z-10">
                    New Here?
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap justify-center my-3 w-full mt-12">
                <Link
                  to="/register"
                  className="inline-block align-baseline font-medium text-md text-black hover:text-blue-800 text-right"
                >
                  Create an account
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    
    </>
  );
};

export default Login;