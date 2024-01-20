import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

function RegistrationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const history = useHistory();
  const [successMessage, setSuccessMessage] = useState(null);

  const onSubmit = (data) => {
    setSuccessMessage('Registration successful!');
    history.push('/');
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="userFirstName">First Name:</label>
          <input {...register('userFirstName', { required: true })} id="userFirstName" placeholder="Enter your first name" />
          {errors.userFirstName && <span className="error">First name is required</span>}
        </div>

        <div>
          <label htmlFor="userLastName">Last Name:</label>
          <input {...register('userLastName', { required: true })} id="userLastName" placeholder="Enter your last name" />
          {errors.userLastName && <span className="error">Last name is required</span>}
        </div>

        <div>
          <label htmlFor="userEmail">Email:</label>
          <input 
            type="email" 
            {...register('userEmail', { required: true, pattern: /^[^@]+@[^@]+\.[^@]+$/ })} 
            id="userEmail" 
            placeholder="Enter your email" 
          />
          {errors.userEmail && <span className="error">Invalid email address</span>}
        </div>

        <button type="submit">Register</button>
      </form>

      {successMessage && <div className="success">{successMessage}</div>}
    </div>
  );
}

export default RegistrationForm;