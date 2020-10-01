import { commitMutation } from "react-relay";

import React, { useState } from "react";
import { environment } from "../../Environment";

export default function CreateTodo() {
  const mutation = graphql`
    mutation CreateTodoMutation($input: createTodoInput!) {
      createTodo(input: $input) {
        status
        message
      }
    }
  `;
  const [value, setValue] = useState("");

  const createTodo = () => {
    commitMutation(environment, {
      mutation,
      variables: { input: { title: value } },
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
        placeholder="Enter Todos item"
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
      <button
        type="submit"
        style={{ height: "30px", marginLeft: "530px", marginTop: "20px" }}
        onClick={createTodo}
      >
        Submit
      </button>
      <br></br>
      <table
        style={{ textAlign: "center", marginLeft: "300px", width: "700px" }}
      >
        <thead>
          <th>ID</th>
          <th>Title</th>
          <th>Completed</th>
        </thead>
        <tbody>
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}