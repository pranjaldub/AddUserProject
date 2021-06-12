import React from "react";
import Card from "../components/UI/Card";
import InputUserForm from "./InputUserForm";
const InputUser = (parentProp) => {
  const pass = (props) => {
    //console.log(props.age);
    //console.log(props.name);
    parentProp.parent({ name: props.name, age: props.age });
  };

  return (
    <div>
      <Card>
        <InputUserForm disp={pass}></InputUserForm>
      </Card>
    </div>
  );
};

export default InputUser;
