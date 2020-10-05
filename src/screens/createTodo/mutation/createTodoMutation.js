import { ConnectionHandler, commitMutation } from "relay-runtime";

const mutation = graphql`
  mutation createTodoMutation($input: createTodoInput!) {
    createTodo(input: $input) {
      status
      message
      todo {
        node {
          id
          completed
          title
        }
      }
    }
  }
`;

function sharedUpdater(store, viewerId, newEdge) {
  const viewerProxy = store.get(viewerId);
  const cnn = ConnectionHandler.getConnection(
    viewerProxy,
    "TodoPaginationContainer_todos"
  );
  ConnectionHandler.insertEdgeBefore(cnn, newEdge);
}

export const createTodoMutation = (environment, title, viewerId) => {
  let tmp_id = 0;

  commitMutation(environment, {
    mutation,

    variables: { input: { title, clientMutationId: `${tmp_id++}` } },
    onCompleted: (res) => {
      console.log(res);
    },

    updater: (store) => {
      const payload = store.getRootField("createTodo");
      const newEdge = payload.getLinkedRecord("todo");
      sharedUpdater(store, viewerId, newEdge);
    },
    optimisticUpdater: (store) => {
      const id = "client:newTodo" + tmp_id++;
      const node = store.create(id, "Todo");
      node.setValue(title, "title");
      node.setValue("id", id);

      const newEdge = store.create("client:newEdge:" + tmp_id++, "todos");
      newEdge.setLinkedRecord(node, "node");
      sharedUpdater(store, viewerId, newEdge);

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
};
