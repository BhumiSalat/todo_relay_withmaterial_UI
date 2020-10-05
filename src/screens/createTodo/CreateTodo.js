import {
  commitMutation,
  RecordProxy,
  RecordSourceSelectorProxy,
} from "react-relay";
import { ConnectionHandler } from "relay-runtime";
import { TodoListQuery } from "../TodoList/__generated__/TodoListQuery.graphql";
import React, { useState } from "react";
import { environment } from "../../Environment";
import { createTodoMutation } from "./mutation/createTodoMutation";
export default function CreateTodo() {
  // const mutation = graphql`
  //   mutation CreateTodoMutation($input: createTodoInput!) {
  //     createTodo(input: $input) {
  //       status
  //       message
  //     }
  //   }
  // `;

  // /**
  //  *
  //  * @param {RecordSourceSelectorProxy} store
  //  * @param {RecordProxy} newEdge
  //  * @param { TodoListQuery } viewer
  //  */
  // function sharedUpdater(store, viewer, newEdge) {
  //   const viewerProxy = store.get(viewer.id);
  //   const cnn = ConnectionHandler.getConnection(
  //     viewerProxy,
  //     "TodoPaginationContainer_todos"
  //   );
  //   ConnectionHandler.insertEdgeAfter(cnn, newEdge);
  // }
  // let tmp_id = 0;

  const [value, setValue] = useState("");

  // const createTodo = () => {
  //   commitMutation(environment, {
  //     mutation,

  //     variables: { input: { title: value, clientMutationId: `${tmp_id++}` } },
  //     onCompleted: (res) => {
  //       console.log(res);
  //       setValue("");
  //     },

  //     updater: (store) => {
  //       const payload = store.getRootField("createTodo");
  //       const newEdge = payload.getLinkedRecord("todos", { first: 5 });
  //       sharedUpdater(store, viewer, newEdge);
  //     },
  //     optimisticUpdater: (store) => {
  //       const id = "client:newTodo" + tmp_id++;
  //       const node = store.create(id, "Todo");
  //       node.setValue(title, "title");
  //       node.setValue("id", id);

  //       const newEdge = store.create("client:newEdge:" + tmp_id++, "todos");
  //       newEdge.setLinkedRecord(node, "node");
  //       sharedUpdater(store, viewer, newEdge);

  //       // Get the todoProxy, and update the record
  //       const viewerProxy = store.get(viewer.id);

  //       if (!viewerProxy) {
  //         throw new Error("Failed to retrieve todoProxy from store");
  //       }
  //     },

  //     onError: (error) => {
  //       console.log(error);
  //     },
  //   });
  // };

  // const optimisticResponse = {
  //   createTodo: {
  //     status: "SUCESS",
  //     message: "Todo created sucessfully",
  //   },
  // };

  // commitMutation(environment, {
  //   mutation,
  //   optimisticResponse,
  //   variables: { input: { title: value } },
  //   onCompleted: (res) => {
  //     console.log(res);
  //     setValue("");
  //   },
  //   onError: (error) => {
  //     console.log(error);
  //   },
  // });

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
        onClick={() => {
          createTodoMutation(
            environment,
            value,
            "VXNlcjpTTERLRkpEU0tGSlNES0xKRktMRFNKRg=="
          );
        }}
      >
        Submit
      </button>
      <br></br>
    </div>
  );
}
