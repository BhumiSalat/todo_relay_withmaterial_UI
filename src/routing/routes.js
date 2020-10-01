import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SignIn } from "../components/Auth/SignIn";
import Home from "../components/Home";
import CreateTodo from "../screens/createTodo/CreateTodo";
import TodoList, { TodoListMutation } from "../screens/TodoList/TodoList";
import EditTodo from "../screens/editTodo/EditTodo";
import DeleteTodo from "../screens/deleteTodo/DeleteTodo";

export const Routes = () => (
  // <Router>
  //   <Switch>
  //     <Route exact path="/" component={TodoList} />
  //   </Switch>
  // </Router>

  // <Router>
  //   <Switch>
  //     <Route exact path="/create" component={CreateTodo} />
  //   </Switch>
  // </Router>

  <Router>
    <Switch>
      <Route exact path="/update" component={EditTodo} />
    </Switch>
  </Router>

  // <Router>
  //   <Switch>
  //     <Route exact path="/delete" component={DeleteTodo} />
  //   </Switch>
  // </Router>
);
