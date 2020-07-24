import React, { useState } from "react";
import "./List.style.scss";
import { useDispatch } from "react-redux";

import {
  deleteTask,
  editTask,
  doneTaskToggle,
} from "../../redux/taskList/taskList.action";

function List({ task }) {
  const [editFlag, setEditFlag] = useState(false);
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
    if (input.length === 0) return;

    dispatch(editTask(task, input));
    setInput("");
    setSubmitFlag(false);
    setEditFlag(false);
  };

  if (!editFlag) {
    return (
      <>
        <div
          className="List"
          style={
            task.doneFlag ? { background: "rgba(122, 181, 185,0.2)" } : null
          }
        >
          {task.title}
          <div className="actionSection">
            <i
              className="fas fa-trash-alt delete"
              onClick={() => dispatch(deleteTask(task))}
            ></i>
            <i
              className="fas fa-edit edit"
              onClick={() => setEditFlag(true)}
            ></i>

            <i
              className="fas fa-calendar-check"
              onClick={() => dispatch(doneTaskToggle(task))}
            ></i>
          </div>
        </div>
        <hr size="1px" align="center" width="100%" />
      </>
    );
  } else {
    return (
      <div className="ListForm">
        <form
          className="List"
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <i className="fas fa-edit edit"></i>
          <input
            type="text"
            name="input"
            value={input}
            placeholder="Edit Task"
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
}

export default List;
