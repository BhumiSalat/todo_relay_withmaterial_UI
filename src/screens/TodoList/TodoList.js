import React from "react";
import { useQuery, graphql } from "relay-hooks";

export const TodoListQuery = graphql`
  query TodoListQuery {
    todos(after: null, first: 2) {
      pageInfo {
        hasNextPage
        endCursor
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

export default function TodoList() {
  const { props: queryProps, error } = useQuery(
    TodoListQuery,
    {},
    {
      fetchPolicy: "network-only",
    }
  );
  return <div>{JSON.stringify({ queryProps, error })}</div>;
  console.log(queryProps);
  return <div></div>;
}
