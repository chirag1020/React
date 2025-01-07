import React, { useState } from 'react';

function Calculator() {
  const [no1, setNo1] = useState(0);
  const [no2, setNo2] = useState(0);

  return (
    <div>
      <h1>Calculator</h1>
      <input
        type="number"
        value={no1}
        onChange={(e) => setNo1(Number(e.target.value))}
      />
      <br />
      <input
        type="number"
        value={no2}
        onChange={(e) => setNo2(Number(e.target.value))}
      />
      <br />
      <div>
        <p>
          {no1} + {no2} = {no1 + no2}
        </p>
        <p>
          {no1} - {no2} = {no1 - no2}
        </p>
        <p>
          {no1} * {no2} = {no1 * no2}
        </p>
        <p>
          {no1} / {no2} = {no2 !== 0 ? no1 / no2 :''}
        </p>
      </div>
    </div>
  );
}

export default Calculator;
