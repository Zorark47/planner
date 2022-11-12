import React from "react";

export default function Todo(props) {
    return (
      <li>
        <div>
            <input type="checkbox"></input>
          <h3>
            {props.text}
          </h3>
        </div>
        <div>
          <button type="button" onClick={() => props.deleteTask(props.id)}>
            Delete <span>{props.text}</span>
          </button>
        </div>
      </li>
    );
  }
  