import React from "react";
import User from "./User";
//fucntion to render all the users
const RenderUsers = (props) => {
  return (
    <div>
      {props.users.map((user) => (
        <User name={user.name} age={user.age}></User>
      ))}
    </div>
  );
};

export default RenderUsers;
