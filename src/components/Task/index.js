import React from "react";

function Task(props) {
  return (
    <li
      onClick={() => {
        alert(
          "Bueno, esto teoricamente deberia borrarme, pero definitivamente no lo hace"
        );
      }}
    >
      {props.value}
    </li>
  );
}

export default Task;
