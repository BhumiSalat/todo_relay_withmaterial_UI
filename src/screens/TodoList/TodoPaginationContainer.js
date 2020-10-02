import React from "react";
// import { graphql } from "react-relay";
import { usePagination, graphql } from "relay-hooks";
import TodoList from "./TodoList";
// import { DeleteTodo } from "../deleteTodo/DeleteTodo";
import InfiniteScroll from "react-infinite-scroll-component";

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

  // return (
  //     // (_loadMore = { _loadMore }),
  //     // (isLoading = { isLoading }),
  //     // (hasMore = { hasMore })(
  //   <div>
  //     <br></br>
  //     <table
  //       style={{
  //         textAlign: "center",
  //         marginLeft: "250px",
  //         width: "700px",
  //         border: "1px solid black",
  //       }}
  //     >
  //       <thead>
  //         <th style={{ border: "1px solid black", padding: "5px" }}>ID</th>
  //         <th style={{ border: "1px solid black", padding: "5px" }}>Title</th>
  //         <th style={{ border: "1px solid black", padding: "5px" }}>Extra</th>
  //         <th style={{ border: "1px solid black", padding: "5px" }}>Action</th>
  //       </thead>
  //       <tbody>
  //         {viewer.todos.edges.map((data) => {
  //           return (
  //             <tr key={data.node.id}>
  //               <td style={{ border: "1px solid black", padding: "5px" }}>
  //                 {data.node.id}
  //               </td>
  //               <td
  //                 style={{
  //                   border: "1px solid black",
  //                   padding: "5px",
  //                   textDecoration: data.node.iscompleted
  //                     ? "line-through"
  //                     : "none",
  //                 }}
  //               >
  //                 {data.node.title}
  //               </td>
  //               <td style={{ border: "1px solid black", padding: "5px" }}>
  //                 {data.node.iscompleted}
  //               </td>

  //               <td style={{ border: "1px solid black", padding: "5px" }}>
  //                 <button style={{ marginRight: "10px" }}>Completed</button>
  //                 <button>Edit</button>
  //                 <button style={{ marginLeft: "10px" }}>Delete</button>
  //               </td>
  //             </tr>
  //           );
  //         })}
  //       </tbody>
  //     </table>
  //     <button onClick={_loadMore} title="Load More">
  //       Load More
  //     </button>

  //     {/* {viewer.todos.edges.map((data) => {
  // //       <h1>({data.title})</h1>;
  // //     })} */}
  //   </div>
  //   //   // )
  // );

  // const fetchMoreData = () => {
  //   setTimeout(() => {
  //     items: viewer.todos.edges({ length: 2 });
  //   }, 1500);
  // };

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
                <td
                  style={{
                    border: "1px solid black",
                    padding: "5px",
                    textDecoration: data.node.iscompleted
                      ? "line-through"
                      : "none",
                  }}
                >
                  {data.node.title}
                </td>
                <td style={{ border: "1px solid black", padding: "5px" }}>
                  <button style={{ marginRight: "10px" }}>Completed</button>
                  <button>Edit</button>
                  <button style={{ marginLeft: "10px" }}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={_loadMore}>Load More</button>
    </InfiniteScroll>
  );
};

export default TodoPaginationContainer;
