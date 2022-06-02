import React from "react";

const ParentComponent = (props) => {
  return (
    <div className="parent-wrapper">
      <h3>Parent header</h3>
      <div>{props.children}</div>
    </div>
  );
};

export default ParentComponent;
