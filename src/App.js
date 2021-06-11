import "./App.css";
import InputUser from "./components/InputUser";
import RenderUsers from "./components/RenderUsers";
import React, { useState } from "react";
function App() {
  //initial user list
  let userList = [
    { name: "Pranjal", age: 22 },
    { name: "Sunny", age: 23 },
  ];
  //state to manage list
  const [Users, IncreaseUsers] = useState(userList);

  const HandleUsers = (props) => {
    IncreaseUsers((prevState) => {
      return [props, ...prevState];
    });
  };
  return (
    <div>
      <InputUser parent={HandleUsers}></InputUser>
      <RenderUsers users={Users}></RenderUsers>
    </div>
  );
}

export default App;
