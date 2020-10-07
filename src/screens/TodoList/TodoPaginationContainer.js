import React from "react";
// import { graphql } from "react-relay";
import { usePagination, graphql } from "relay-hooks";
import TodoList from "./TodoList";
import { environment } from "../../Environment";
import InfiniteScroll from "react-infinite-scroll-component";
import { deleteTodoMutation } from "../deleteTodo/deleteTodoMutation";
import { editTodo } from "../editTodo/EditTodo";
import { deleteCompletedTodosMutation } from "../deleteCompletedTodo/deleteCompletedTodos";

const TodoPaginationContainer = (props) => {
  // console.log("props::", props);

  const fragmentSpec = graphql`
    fragment TodoPaginationContainer_user on User
    @argumentDefinitions(
      after: { type: "String" }
      first: { type: "Int", defaultValue: 5 }
    ) {
      todos(after: $after, first: $first)
      @connection(key: "TodoPaginationContainer_todos", filters: []) {
        pageInfo {
          endCursor
          hasNextPage
        }
        edges {
          node {
            id
            title
            completed
          }
          cursor
        }
      }
    }
  `;

  const connectionConfig = {
    getVariables(props, { first, after, cursor }, fragmentVariables) {
      console.log(cursor);
      return {
        ...fragmentVariables,
        after: cursor,
      };
    },
    query: props.TodoListQuery,
  };

  // console.log(fragmentSpec, props.viewer, "fragmentSpec, props.viewer");
  //console.log("viewer id:", props.viewer.id);
  console.log("connection config", connectionConfig);
  const [
    viewer,
    { hasMore, isLoading, refetchConnection, loadMore },
  ] = usePagination(fragmentSpec, props?.viewer);

  // console.log("Todos", viewer.todos.edges);
  // console.log("Length::", viewer.todos.edges.length);

  const _loadMore = () => {
    if (!hasMore() || isLoading()) {
      return;
    }
    loadMore(connectionConfig, 3, (error) => {
      console.log(error);
    });
  };

  return (
    <InfiniteScroll
      dataLength={viewer.todos.edges.length}
      loadMore={() => _loadMore()}
      hasMore={viewer.todos.pageInfo.hasNext}
      loader={<h4>Loading....</h4>}
    >
      {console.log(viewer)}
      <table
        style={{
          textAlign: "center",
          marginLeft: "250px",
          width: "700px",
          border: "1px solid black",
        }}
      >
        <thead>
          <th style={{ border: "1px solid black", padding: "5px" }}>ID</th>
          <th style={{ border: "1px solid black", padding: "5px" }}>Title</th>
          <th style={{ border: "1px solid black", padding: "5px" }}>Action</th>
        </thead>
        <tbody>
          {viewer.todos.edges.map((data) => {
            return (
              <tr key={data.node.id}>
                <td style={{ border: "1px solid black", padding: "5px" }}>
                  {data.node.id}
                </td>
                {/* <td
                  style={{
                    border: "1px solid black",
                    padding: "5px",
                    textDecoration: data.node.completed
                      ? "line-through"
                      : "none",
                  }}
                >
                  {data.node.title}
                </td> */}
                <td
                  style={{
                    border: "1px solid black",
                    padding: "5px",
                  }}
                >
                  <input
                    defaultValue={data.node.title}
                    disabled={data.node.completed ? true : ""}
                    onChange={(e) => {
                      console.log(e.target.value);
                      editTodo(
                        environment,
                        data.node.id,
                        e.target.value,
                        data.node.completed,
                        "VXNlcjpTTERLRkpEU0tGSlNES0xKRktMRFNKRg=="
                      );
                    }}
                  />
                </td>
                <td style={{ border: "1px solid black", padding: "5px" }}>
                  {/* <button style={{ marginRight: "10px" }}>Completed</button> */}
                  <button
                    onClick={() => {
                      editTodo(
                        environment,
                        data.node.id,
                        data.node.title,
                        data.node.completed,
                        "VXNlcjpTTERLRkpEU0tGSlNES0xKRktMRFNKRg=="
                      );
                    }}
                  >
                    Edit
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => {
                      deleteTodoMutation(
                        environment,
                        "VXNlcjpTTERLRkpEU0tGSlNES0xKRktMRFNKRg==",
                        data.node.id
                      );
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={_loadMore}>Load More</button>
      <button
        onClick={() => {
          deleteCompletedTodosMutation(
            environment,
            "VXNlcjpTTERLRkpEU0tGSlNES0xKRktMRFNKRg==",
            ""
          );
        }}
      >
        DeleteCompletedTodos
      </button>
    </InfiniteScroll>
  );
};

export default TodoPaginationContainer;
