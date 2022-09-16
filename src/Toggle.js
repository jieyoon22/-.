import React, { useState } from "react";

const Toggle = (props) => {
  const [isValid, setIsValid] = useState(true);

  const col = () => {
    setIsValid(!isValid);
    console.log(isValid);
  };
  return (
    <div>
      <button onClick={col} style={{ color: isValid ? "red" : "blue" }}>
        토글
      </button>
    </div>
  );
};

export default Toggle;
