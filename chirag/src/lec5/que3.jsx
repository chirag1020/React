import React, { useState } from 'react';

const ToggleText = () => {
  const [text, setText] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <h1>Toggle Text Visibility</h1>
      <input
        type="text"
        placeholder="Type something"
        value={text}
        onChange={handleInputChange}
      />
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide Text' : 'Show Text'}
      </button>
      <p>{isVisible ? text : ''}</p>
    </div>
  );
};

export default ToggleText;