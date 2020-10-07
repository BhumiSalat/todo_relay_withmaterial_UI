import { ConnectionHandler, commitMutation } from "relay-runtime";

import React, { useState } from "react";
import { environment } from "../../Environment";

const mutation = graphql`
  mutation deleteTodoMutation($input: deleteTodoInput!) {
    deleteTodo(input: $input) {
      status
      message
    }
  }
`;

function sharedUpdater(store, viewerId, nodeId) {
  const viewerProxy = store.get(viewerId);
  const cnn = ConnectionHandler.getConnection(
    viewerProxy,
    "TodoPaginationContainer_todos"
  );
  ConnectionHandler.deleteNode(cnn, nodeId);
}
export const deleteTodoMutation = (environment, viewerId, nodeId) => {
  commitMutation(environment, {
    mutation,
    variables: { input: { nodeId } },
    onCompleted: (res) => {
      console.log(res);
    },
    updater: (store) => {
      const payload = store.getRootField("deleteTodo");
      //const newEdge = payload.getLinkedRecord("");
      sharedUpdater(store, viewerId, nodeId);
      if (status == "SUCESS") {
      }
    },
    optimisticUpdater: (store, viewerId, nodeId) => {
      sharedUpdater(store, viewerId, nodeId);

      // Get the todoProxy, and update the record
      const viewerProxy = store.get(viewerId);

      if (!viewerProxy) {
        throw new Error("Failed to retrieve todoProxy from store");
      }
    },

    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <div>
      {/* <input
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
      </button> */}
    </div>
  );
};
