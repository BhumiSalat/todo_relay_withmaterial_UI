// import React from "react";
// import { useQuery } from "relay-hooks";
// import { graphql } from "react-relay";

// //@connection(key: "FollowingFeedRefetchContainer_feed", filters: []) {
// export const HomeQuery = graphql`
//   query HomeQuery {
//     todos(after: null, first: 2) {
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

// const Home = (props) => {
//   const { props: queryProps, error } = useQuery(
//     HomeQuery,
//     {},
//     {
//       fetchPolicy: "network-only",
//     }
//   );
//   return <div>{JSON.stringify({ queryProps, error })}</div>;
// };
// export default Home;
