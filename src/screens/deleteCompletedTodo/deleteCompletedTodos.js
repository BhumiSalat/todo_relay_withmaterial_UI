import { ConnectionHandler, commitMutation } from "relay-runtime";

import React from "react";
const mutation = graphql`
  mutation deleteCompletedTodosMutation($input: deleteCompletedTodosInput!) {
    deleteCompletedTodos(input: $input) {
      status
      message
    }
  }
`;

function sharedUpdater(store, viewerId, clientMutationId) {
  const viewerProxy = store.get(viewerId);
  const cnn = ConnectionHandler.getConnection(
    viewerProxy,
    "TodoPaginationContainer_todos"
  );
  ConnectionHandler.deleteNode(cnn, clientMutationId);
}
export const deleteCompletedTodosMutation = (
  environment,
  viewerId,
  clientMutationId
) => {
  commitMutation(environment, {
    mutation,
    variables: { input: { clientMutationId: "" } },
    onCompleted: (res) => {
      console.log(res);
    },
    updater: (store) => {
      const payload = store.getRootField("deleteCompletedTodos");
      sharedUpdater(store, viewerId, clientMutationId);
    },
    optimisticUpdater: (store, viewerId, clientMutationId) => {
      sharedUpdater(store, viewerId, clientMutationId);

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
