import { commitMutation } from "react-relay";

import React, { useState } from "react";
import { environment } from "../../Environment";

export default function DeleteTodo() {
  const mutation = graphql`
    mutation DeleteTodoMutation($input: deleteTodoInput!) {
      deleteTodo(input: $input) {
        status
        message
      }
    }
  `;
  const [value, setValue] = useState("");

  const deleteTodo = () => {
    commitMutation(environment, {
      mutation,
      variables: { input: { id: value } },
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
        placeholder="Enter Todo ID"
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
      <button
        type="submit"
        style={{ height: "30px", marginLeft: "530px", marginTop: "20px" }}
        onClick={deleteTodo}
      >
        Submit
      </button>
    </div>
  );
}
