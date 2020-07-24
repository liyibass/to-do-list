import React, { useState } from "react";
import "./ListForm.style.scss";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/taskList/taskList.action";

function ListForm() {
  const [input, setInput] = useState("");
  const [submitFlag, setSubmitFlag] = useState(false);

  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setInput(e.target.value);
    if (e.target.value.length === 0) {
      setSubmitFlag(false);
    } else {
      setSubmitFlag(true);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(addTask(input));

    setInput("");
    setSubmitFlag(false);
  };

  return (
    <div className="ListForm">
      <form
        className="List"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        {/* <i className="fas fa-plus"></i> */}
        <input
          type="text"
          name="input"
          value={input}
          placeholder="Insert new Task"
          autoComplete="off"
          onChange={(e) => changeHandler(e)}
        />
        {submitFlag ? (
          <button className="submitIcon" type="submit">
            <i className="fas fa-plus-circle"></i>
          </button>
        ) : null}
      </form>

      <hr size="1px" align="center" width="100%" />
    </div>
  );
}

export default ListForm;
