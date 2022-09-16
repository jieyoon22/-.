import React from "react";

const Input = (props) => {
  return (
    <div>
      <form>
        <input
          type="text"
          value={props.input}
          onChange={(e) => {
            props.setInput(e.target.value);
          }}
        />
        <button onClick={props.clicked}>굿</button>
      </form>
    </div>
  );
};
export default Input;
