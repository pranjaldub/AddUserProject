import React from "react";
import User from "./User";
import SimpleCard from "./UI/Card";
//fucntion to render all the users
const RenderUsers = (props) => {
  return (
    <div>
      {props.users.map((user) => (
        <SimpleCard>
          <User name={user.name} age={user.age}></User>
        </SimpleCard>
      ))}
    </div>
  );
};

export default RenderUsers;
