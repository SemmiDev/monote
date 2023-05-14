import { Button, Label, TextInput } from 'flowbite-react';
import { PasswordIcon, UsernameIcon } from './Icon';
import { useEffect, useState } from 'react';
import { isLoggedIn, login, register } from '../datastores/user_localstorage';
import { Navigate, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState({
    loginError: '',
    registerError: '',
  });

  useEffect(() => {
    if (localStorage.getItem('loggedInUser')) {
      navigate('/dashboard');
    }
  }, []);

  const loginHandler = () => {
    setError({ ...error, loginError: '' });

    if (credentials.username === '' || credentials.password === '') {
      setError({ ...error, loginError: 'Username dan Password harus diisi' });

      setTimeout(() => {
        setError({ ...error, loginError: '' });
      }, 1500);
    }

    let statusMessage = login(credentials.username, credentials.password);
    if (statusMessage === 'Berhasil login') {
      navigate('/dashboard');
      return;
    }

    setError({ ...error, loginError: statusMessage });
    setTimeout(() => {
      setError({ ...error, loginError: '' });
    }, 1500);
  };

  const registerHandler = () => {
    setError({ ...error, loginError: '' });

    if (credentials.username === '' || credentials.password === '') {
      setError({
        ...error,
        loginError: 'Username dan Password harus diisi',
      });

      setTimeout(() => {
        setError({ ...error, loginError: '' });
      }, 1500);
      return;
    }

    let statusMessage = register(credentials.username, credentials.password);
    setError({ ...error, registerError: statusMessage });

    setTimeout(() => {
      setError({ ...error, registerError: '' });
    }, 1500);
  };

  return (
    <div
      className={`w-full max-w-lg p-8 mx-auto mt-24 border rounded-lg border-gray-500/50       ${
        error.loginError || error.registerError
          ? 'border-red-500/50'
          : 'border-gray-500/50'
      }`}
    >
      <h1 className='mb-5'>
        {error.loginError && (
          <span className='text-red-500'>{error.loginError}</span>
        )}
        {error.registerError && (
          <span className='text-red-500'>{error.registerError}</span>
        )}
      </h1>
      <div className='mb-3 space-y-1'>
        <div className='block'>
          <Label htmlFor='username' className='text-white' value='Username' />
        </div>
        <TextInput
          id='username'
          value={credentials.username}
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
          placeholder='abdulrohman'
          required={true}
          icon={UsernameIcon}
        />
      </div>
      <div className='space-y-1'>
        <div className='block'>
          <Label htmlFor='password' className='text-white' value='Password' />
        </div>
        <TextInput
          type='password'
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
          id='password'
          placeholder='****************'
          required={true}
          icon={PasswordIcon}
        />
      </div>
      <div className='flex items-center justify-end mt-10 gap-x-2'>
        <Button onClick={loginHandler} className=''>
          Login
        </Button>{' '}
        <Button onClick={registerHandler} color={'purple'} className=''>
          Register
        </Button>
      </div>
    </div>
  );
}

export default Login;
