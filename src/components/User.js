import React from "react";

const User = (props) => {
  return (
    <div>
      <div style={{ display: "inline", margin: "20px" }}>
        Name : {props.name}
      </div>
      <div style={{ display: "inline", margin: "20px" }}>Age : {props.age}</div>
    </div>
  );
};
export default User;
