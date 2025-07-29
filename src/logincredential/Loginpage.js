import React, { useState } from 'react';
import '../App.css'; 
import Signuppage from './signuppage'; 
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Loginpage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Form Data:", data);

    // Simulate login logic and redirect based on role
    switch (data.role) {
      case 'admin':
        navigate('/admin');
        break;
      case 'tanker':
        navigate('/tanker');
        break;
      case 'truck':
        navigate('/truck');
        break;
      default:
        alert('Invalid role selected');
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        {/* Toggle Buttons */}
        <div className="form-toggle">
          <button className={isLogin ? 'active' : ''} onClick={() => setIsLogin(true)}>Login</button>
          <button className={!isLogin ? 'active' : ''} onClick={() => setIsLogin(false)}>Signup</button>
        </div>

        {/* Animated Form Switch */}
        <AnimatePresence mode="wait">
          {isLogin ? (
            <motion.form
              key="login"
              className="form"
              onSubmit={handleSubmit(onSubmit)}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.3 }}
            >
              <h2>Login Form</h2>

              {/* Role Selection */}
              <select
                className={`form-select ${errors.role ? 'error-input' : ''}`}
                {...register("role", { required: "Please select a role" })}
              >
                <option value="">Select Role</option>
                <option value="admin">Admin</option>
                <option value="tanker">Tanker</option>
                <option value="truck">Truck</option>
              </select>
              {errors.role && <p className="error">{errors.role.message}</p>}

              {/* Email */}
              <input
                type="email"
                placeholder="Email ID"
                className={errors.email ? 'error-input' : ''}
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <p className="error">{errors.email.message}</p>}

              {/* Password */}
              <input
                type="password"
                placeholder="Password"
                className={errors.password ? 'error-input' : ''}
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && <p className="error">{errors.password.message}</p>}

              <a href="#">Forget password?</a>

              <button type="submit">Login</button>
              <p>New user? <a href="#" onClick={() => setIsLogin(false)}>Signup</a></p>
            </motion.form>
          ) : (
            <motion.div
              key="signup"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
            >
              <Signuppage setIsLogin={setIsLogin} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
