import React, { useState } from 'react';

const CharacterCounter = () => {
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>Character Counter</h1>
      <input
        type="text"
        placeholder="Type something"
        value={text}
        onChange={handleInputChange}
      />
      <p>Total Characters: {text.length}</p>
    </div>
  );
};

export default CharacterCounter;