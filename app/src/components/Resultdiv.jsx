import React from "react";

function Resultdiv({ title, onDelete,onUpdate }) {
  return (
    <div className="resultdiv">
      <h4>{title}</h4>
      <button onClick={onDelete}>Delete</button>
      <button onClick={onUpdate}>Update</button>
    </div>
  );
}

export default Resultdiv;
