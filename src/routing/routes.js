import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SignIn } from "../components/Auth/SignIn";
import Home from "../components/Home";
import CreateTodo from "../screens/createTodo/CreateTodo";
import TodoList, { TodoListMutation } from "../screens/TodoList/TodoList";
import EditTodo from "../screens/editTodo/EditTodo";
import DeleteTodo from "../screens/deleteTodo/DeleteTodo";
import TodoContainer from "../screens/TodoContainer/TodoContainer";

export const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={TodoContainer} />
      {/* <Route exact path="/create" component={CreateTodo} />
      <Route exact path="/update" component={EditTodo} />
      <Route exact path="/delete" component={DeleteTodo} /> */}
    </Switch>
  </Router>
);
