import React from "react";
import "./ListContainer.style.scss";
import ListForm from "../ListForm/ListForm.component";
import List from "../List/List.component";
import { useSelector } from "react-redux";
function ListContainer() {
  const taskList = useSelector((state) => state.taskList.taskList);

  return (
    <div className="ListContainer">
      <div className="header">
        <h3>to-do</h3>
      </div>
      <hr size="1px" align="center" width="100%" />

      <ListForm />

      {taskList.map((task) => {
        return <List task={task} key={task._id} />;
      })}
    </div>
  );
}

export default ListContainer;
