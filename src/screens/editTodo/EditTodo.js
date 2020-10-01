import { commitMutation } from "react-relay";

import React, { useState } from "react";
import { environment } from "../../Environment";

export default function EditTodo() {
  const mutation = graphql`
    mutation EditTodoMutation($input: editTodoInput!) {
      editTodo(input: $input) {
        status
        message
      }
    }
  `;
  const [value, setValue] = useState("");

  const editTodo = () => {
    commitMutation(environment, {
      mutation,
      variables: { input: { id: value, title: value, completed: value } },
      onCompleted: (res) => {
        console.log(res);
        setValue("");
      },
      optimisticUpdater: (store) => {},

      onError: (error) => {
        console.log(error);
      },
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Todos Id"
        style={{
          width: "40%",
          height: "30px",
          marginLeft: "300px",
          marginTop: "30px",
        }}
        id="id"
        value={value}
        onChange={(e) => {
          e.preventDefault();
          setValue(e.target.value);
        }}
      ></input>
      <br></br>
      <input
        type="text"
        placeholder="Enter Todos title"
        style={{
          width: "40%",
          height: "30px",
          marginLeft: "300px",
          marginTop: "30px",
        }}
        id="title"
        value={value}
        onChange={(e) => {
          e.preventDefault();
          setValue(e.target.value);
        }}
      ></input>
      <br></br>
      <br></br>
      <input
        type="checkbox"
        id="completed"
        name="completed"
        value="true"
        onClick={(e) => {
          e.preventDefault();
          setValue(e.target.value);
        }}
        style={{ marginLeft: "400px" }}
      />
      <label for="complete">Completed</label>

      <input
        type="checkbox"
        id="uncompleted"
        name="uncompleted"
        value="false"
        onClick={(e) => {
          e.preventDefault();
          setValue(e.target.value);
        }}
        style={{ marginLeft: "20px" }}
      />
      <label for="uncomplete">Not Completed</label>

      <br></br>

      <button
        type="submit"
        style={{ height: "30px", marginLeft: "530px", marginTop: "20px" }}
        onClick={editTodo}
      >
        Submit
      </button>
      <br></br>
    </div>
  );
}
