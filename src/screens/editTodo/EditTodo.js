import { ConnectionHandler, commitMutation } from "relay-runtime";

import React, { useState } from "react";
import { environment } from "../../Environment";

const mutation = graphql`
  mutation EditTodoMutation($input: editTodoInput!) {
    editTodo(input: $input) {
      status
      message
    }
  }
`;

function sharedUpdater(store, id, title, completed, viewerId) {
  const viewerProxy = store.get(viewerId);
  const cnn = ConnectionHandler.getConnection(
    viewerProxy,
    "TodoPaginationContainer_todos"
  );
  //ConnectionHandler.insertEdgeBefore(cnn, newEdge);
}
// const [value, setValue] = useState("");

export const editTodo = (environment, id, title, completed, viewerId) => {
  commitMutation(environment, {
    mutation,
    variables: { input: { id, title, completed: true } },
    onCompleted: (res) => {
      console.log(res);
    },
    updater: (store) => {
      const payload = store.getRootField("editTodo");
      sharedUpdater(store, id, title, completed, viewerId);
    },
    optimisticUpdater: (store) => {
      const node = store.get(id);
      node.setValue(title, "title");
      node.setValue("id", id);
      node.setValue(completed, "completed");

      sharedUpdater(store, id, title, completed, viewerId);

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

  return <div></div>;
};
