import React from "react";
import "./List.style.scss";

function List({ title }) {
  return (
    <div className="List">
      {title}
      <div className="actionSection">
        <i className="fas fa-trash-alt delete"></i>
        <i className="fas fa-edit edit"></i>
      </div>
    </div>
  );
}

export default List;
