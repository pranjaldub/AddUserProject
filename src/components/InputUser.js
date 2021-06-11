import React from "react";
import InputUserForm from "./InputUserForm";
const InputUser = (parentProp) => {
  const pass = (props) => {
    //console.log(props.age);
    //console.log(props.name);
    parentProp.parent({ name: props.name, age: props.age });
  };

  return (
    <div>
      <InputUserForm disp={pass}></InputUserForm>
    </div>
  );
};

export default InputUser;
