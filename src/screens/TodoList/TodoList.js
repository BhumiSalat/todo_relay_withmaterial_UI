// import React from "react";
// import { useQuery, graphql, useFragment } from "relay-hooks";

// export const TodoListQuery = graphql`
//   query TodoListQuery {
//     todos(
//       $after: String ,
//       $first: Int )
//     @connection(key: "TodoList_todos", filters: []) {
//       pageInfo {
//         hasNextPage
//         endCursor
//       }
//       edges {
//         node {
//           id
//           title
//           completed
//         }
//         cursor
//       }
//     }
//   }
// `;

// export default function TodoList() {
//   // const edges = useFragment(TodoListQuery, todos.edges);
//   // console.log(edges);
//   const { props: queryProps, edges: todoEdges, error } = useQuery(
//     TodoListQuery,
//     {},
//     {
//       fetchPolicy: "network-only",
//     }
//   );
//   //return <div>{JSON.stringify({ todoEdges, error })}</div>;
//   return <div>Todos Title: {JSON.stringify({ queryProps })}</div>;
//   //console.log(queryProps);

//   // return (
//   //   {todoEdges.map((data) => {
//   //   <div>

//   //       {
//   //         JSON.stringify({ data })
//   //       }
//   //     })}
//   //   </div>

//   // )
// }

import React, { useEffect } from "react";

import { useQuery, graphql } from "relay-hooks";
import TodoPaginationContainer from "./TodoPaginationContainer";

const TodoList = (viewprops) => {
  useEffect(() => {
    return () => {};
  });
  // console.log("viewprops::", viewprops);
  const TodoListQuery = graphql`
    query TodoListQuery($after: String, $first: Int) {
      viewer {
        ...TodoPaginationContainer_user @arguments(after: $after, first: $first)
      }
    }
  `;

  const { props } = useQuery(TodoListQuery, {
    first: 5,
    after: null,
  });

  // console.log(props?.viewer?.todos);
  return props && props.viewer ? (
    <TodoPaginationContainer
      viewer={props.viewer}
      // componentId={viewprops.componentId}
      TodoListQuery={TodoListQuery}
      // title={viewprops.tittle}
    />
  ) : (
    <div>{viewprops.title}</div>
  );
};

export default TodoList;
