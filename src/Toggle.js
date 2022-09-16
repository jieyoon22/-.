import React, { useState } from "react";

const Toggle = (props) => {
  const [isValid, setIsValid] = useState(true);
  return (
    <div>
      <button
        onClick={() => {
          setIsValid(!isValid);
        }}
        style={{ color: !isValid && "hotPink" }}
      >
        토글
      </button>
    </div>
  );
};

export default Toggle;
