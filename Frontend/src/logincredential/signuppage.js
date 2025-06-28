import React from 'react';
import { useForm } from 'react-hook-form';

export default function Signuppage({ setIsLogin }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Signup Data:', data);
    // Add your signup logic here
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h2>Signup Form</h2>

      <input
        type="text"
        placeholder="Full Name"
        className={errors.name ? 'error-input' : ''}
        {...register('name', { required: 'Full name is required' })}
      />
      {errors.name && <p className="error">{errors.name.message}</p>}

      <input
        type="email"
        placeholder="Email ID"
        className={errors.email ? 'error-input' : ''}
        {...register('email', { required: 'Email is required' })}
      />
      {errors.email && <p className="error">{errors.email.message}</p>}

      <input
        type="password"
        placeholder="Password"
        className={errors.password ? 'error-input' : ''}
        {...register('password', { required: 'Password is required' })}
      />
      {errors.password && <p className="error">{errors.password.message}</p>}

      <button type="submit">Signup</button>
      <p>
        Already have an account?{' '}
        <a href="#" onClick={() => setIsLogin(true)}>
          Login
        </a>
      </p>
    </form>
  );
}
