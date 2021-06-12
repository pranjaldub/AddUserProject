import React, { useState } from "react";
import SimpleModal from "./Modal";
import "./InputUserForm.css";
import { cyan } from "@material-ui/core/colors";
const InputUserForm = (props) => {
  //states to manage validation for input name and age
  const [isValidAge, ValidateAge] = useState(true);
  const [isValidName, ValidateName] = useState(true);

  //state to handle input name
  const [InputName, setInputName] = useState("");

  //state to handle input age
  const [InputAge, setInputAge] = useState(-1);

  //function to handle input name
  const NameHandler = (event) => {
    event.preventDefault();
    if (event.target.value.trim() !== "") {
      setInputName(event.target.value);
      ValidateName(true);
    }
  };

  //function to handle the age input
  const AgeHandler = (event) => {
    event.preventDefault();
    if (event.target.value > 0) {
      setInputAge(event.target.value);
      ValidateAge(true);
    }
  };
  //reset age warnings
  const resetAge = () => {
    ValidateAge(true);
  };
  //reset name warnings
  const resetName = () => {
    ValidateName(true);
  };

  //function to submi details and pass to the parent function
  const submit = (event) => {
    event.preventDefault();
    console.log("inside submit", InputAge, InputName);
    if (InputName.trim() !== "" && InputAge > 0 && InputAge < 100) {
      props.disp({ name: InputName, age: InputAge });
      setInputAge("");
      setInputName("");
    } else {
      console.log("not a valid age or name");
      if (InputName.trim() === "") {
        ValidateName(false);
      }
      if (InputAge < 0 || InputAge > 100) {
        ValidateAge(false);
      }
    }
  };

  return (
    <div className="background">
      <form>
        <div>
          <label>UserName</label>
          <input
            type="text"
            placeholder="Sam"
            onChange={NameHandler}
            className="box"
          ></input>
        </div>
        <div>
          <label>Age(Years)</label>
          <input
            type="number"
            placeholder="23"
            onChange={AgeHandler}
            className="box"
          ></input>
        </div>
        <div style={{ alignItems: "center", alignSelf: "center" }}>
          <button
            onClick={submit}
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          >
            Add User
          </button>
          {!isValidName && (
            <SimpleModal show={true}>not a valid name</SimpleModal>
          )}
          {!isValidAge && (
            <SimpleModal show={true}>not a valid age</SimpleModal>
          )}
        </div>
      </form>
    </div>
  );
};

export default InputUserForm;
