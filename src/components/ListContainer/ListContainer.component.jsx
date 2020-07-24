import React from "react";
import "./ListContainer.style.scss";
import ListForm from "../ListForm/ListForm.component";
import List from "../List/List.component";
function ListContainer() {
  return (
    <div className="ListContainer">
      <div className="header">
        <h3>to-do</h3>
      </div>
      <hr size="1px" align="center" width="100%" />

      <ListForm />
      <List title="Fuck" />
      <hr size="1px" align="center" width="100%" />
    </div>
  );
}

export default ListContainer;
