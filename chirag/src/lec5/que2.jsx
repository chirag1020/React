import React, { useState } from 'react';

const EmailValidator = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(null);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e) => {
    const input = e.target.value;
    setEmail(input);
    setIsValid(validateEmail(input));
  };

  return (
    <div>
      <h1>Email Validator</h1>
      <input
        type="text"
        placeholder="Enter your email"
        value={email}
        onChange={handleInputChange}
      />
      {isValid === null ? (
        <p>Please enter an email address.</p>
      ) : isValid ? (
        <p style={{ color: 'green' }}>This is a valid email address.</p>
      ) : (
        <p style={{ color: 'red' }}>This is not a valid email address.</p>
      )}
    </div>
  );
};

export default EmailValidator;
