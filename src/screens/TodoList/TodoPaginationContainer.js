import React from "react";

import { usePagination, graphql } from "relay-hooks";
import TodoList from "./TodoList";
import { environment } from "../../Environment";
import InfiniteScroll from "react-infinite-scroll-component";
import { deleteTodoMutation } from "../deleteTodo/deleteTodoMutation";
import { editTodo } from "../editTodo/EditTodo";
import { deleteCompletedTodosMutation } from "../deleteCompletedTodo/deleteCompletedTodos";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Fab from "@material-ui/core/Fab";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { TextField } from "@material-ui/core";

//styling code
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    border: "1px solid black",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
      border: "1px solid black",
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 100,
  },
});

//TodoPaginationContainer code
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
  const classes = useStyles();

  return (
    <InfiniteScroll
      dataLength={viewer.todos.edges.length}
      loadMore={() => _loadMore()}
      hasMore={viewer.todos.pageInfo.hasNext}
      loader={<h4>Loading....</h4>}
    >
      {console.log(viewer)}
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          aria-label="customized table"
          style={{
            textAlign: "center",
            marginLeft: "250px",
            marginTop: "30px",
            width: "700px",
            border: "1px solid black",
          }}
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="right">Title</StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {viewer.todos.edges.map((data) => (
              <StyledTableRow key={data.node.id}>
                <StyledTableCell component="th" scope="row">
                  {data.node.id}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <TextField
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
                </StyledTableCell>
                <StyledTableCell align="right">
                  {/* <IconButton aria-label="delete">
                    <DeleteIcon
                      onClick={() => {
                        deleteTodoMutation(
                          environment,
                          "VXNlcjpTTERLRkpEU0tGSlNES0xKRktMRFNKRg==",
                          data.node.id
                        );
                      }}
                    />
                  </IconButton> */}
                  <Fab color="secondary" aria-label="delete">
                    <DeleteIcon
                      onClick={() => {
                        deleteTodoMutation(
                          environment,
                          "VXNlcjpTTERLRkpEU0tGSlNES0xKRktMRFNKRg==",
                          data.node.id
                        );
                      }}
                    />
                  </Fab>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        style={{
          marginLeft: "20px",
        }}
        variant="contained"
        color="primary"
        onClick={_loadMore}
      >
        Load More
      </Button>
      <Button
        style={{
          marginLeft: "20px",
        }}
        variant="contained"
        color="primary"
        onClick={() => {
          deleteCompletedTodosMutation(
            environment,
            "VXNlcjpTTERLRkpEU0tGSlNES0xKRktMRFNKRg==",
            ""
          );
        }}
      >
        DeletedCompletedTodos
      </Button>
    </InfiniteScroll>
  );
};

export default TodoPaginationContainer;
