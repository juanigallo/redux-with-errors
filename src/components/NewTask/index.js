import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../store";

function NewTask() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  function handleChange(e) {
    const { value } = e.target;

    setValue(value);
  }

  function handleClick() {
    dispatch(addTask(value));
  }

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Agregar</button>
    </div>
  );
}

export default NewTask;
