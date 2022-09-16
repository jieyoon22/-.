import React from "react";
import { useState } from "react";
import Toggle from "./Toggle";

const Reply = (props) => {
  return (
    <div>
      {props.reply.map((e, i) => {
        return (
          <p key={i}>
            {e} <Toggle />
          </p>
        );
      })}
    </div>
  );
};

export default Reply;
