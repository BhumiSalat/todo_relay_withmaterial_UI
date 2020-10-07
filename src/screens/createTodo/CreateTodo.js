import React, { useState } from "react";
import { environment } from "../../Environment";
import { createTodoMutation } from "./mutation/createTodoMutation";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
export default function CreateTodo() {
  const [value, setValue] = useState("");

  return (
    <div>
      <TextField
        style={{
          width: "50%",
          height: "30px",
          marginLeft: "300px",
          marginTop: "30px",
        }}
        label="Todo Item"
        variant="outlined"
        placeholder="Enter Todos item"
        value={value}
        onChange={(e) => {
          e.preventDefault();
          setValue(e.target.value);
        }}
      />
      <br></br>

      <Button
        style={{ height: "40px", marginLeft: "530px", marginTop: "40px" }}
        variant="contained"
        color="primary"
        onClick={() => {
          createTodoMutation(
            environment,
            value,
            "VXNlcjpTTERLRkpEU0tGSlNES0xKRktMRFNKRg=="
          );
        }}
      >
        Create Todo
      </Button>
      <br></br>
    </div>
  );
}
