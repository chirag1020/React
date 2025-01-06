import React, { useState } from "react";

function StateExample3() {
  const [color, setColor] = useState("green");
  const [fontFamily, setFontFamily] = useState("Arial");

  const handleFontChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setFontFamily(value);
    }
  };

  return (
    <div>
      <h1>My favorite color is {color}!</h1>
      <input type="radio" name="color" onClick={() => setColor("Blue")} />
      {"Blue"}
      <br />
      <input type="radio" name="color" onClick={() => setColor("Red")} />
      {"Red"}
      <br />
      <input type="radio" name="color" onClick={() => setColor("Yellow")} />
      {"Yellow"}
      <br />

      <h2>Select Font Family:</h2>
<input type="checkbox" value="Arial" checked={fontFamily === "Arial"} onChange={handleFontChange}/>
{"Arial"}
<br />
<input type="checkbox"value="Courier New"checked={fontFamily === "Courier New"}onChange={handleFontChange}/>
{"Courier New"}
<br />
<input type="checkbox" value="Georgia" checked={fontFamily === "Georgia"} onChange={handleFontChange}/>
{"Georgia"}
<br />
<input type="checkbox"value="Times New Roman" checked={fontFamily === "Times New Roman"} onChange={handleFontChange}/>
{"Times New Roman"}
<br />

      <p style={{ color: color, fontFamily: fontFamily }}>
        This is the text content for display
      </p>
    </div>
  );
}

export default StateExample3;
