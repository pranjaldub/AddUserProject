import React, { useState } from "react";

const InputUserForm = (props) => {
  //states to manage validation for input name and age
  const [isValidAge, ValidateAge] = useState(true);
  const [isValidName, ValidateName] = useState(true);

  //state to handle input name
  const [InputName, setInputName] = useState("");

  //state to handle input age
  const [InputAge, setInputAge] = useState("");

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
    if (event.target.value > 0 && event.target.value < 100) {
      setInputAge(event.target.value);
      ValidateAge(true);
    }
  };

  //function to submi details and pass to the parent function
  const submit = (event) => {
    event.preventDefault();
    if (InputName.trim() !== "" && InputAge > 0 && InputAge < 100) {
      props.disp({ name: InputName, age: InputAge });
      setInputAge("");
      setInputName("");
    } else {
      console.log("not a valid age or name");
      ValidateAge(false);
      ValidateName(false);
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
  return (
    <div>
      <form onSubmit={submit}>
        <div>
          <label>UserName</label>
          <input
            type="text"
            placeholder="Sam"
            onChange={NameHandler}
            onClick={resetName}
          ></input>
          {!isValidName && <p>Please enter a name</p>}
        </div>
        <div>
          <label>Age(Years)</label>
          <input
            type="number"
            placeholder="23"
            onChange={AgeHandler}
            onClick={resetAge}
          ></input>
          {!isValidAge && <p>Please enter a valid age</p>}
        </div>
        <div>
          <button>Add User</button>
        </div>
      </form>
    </div>
  );
};

export default InputUserForm;
