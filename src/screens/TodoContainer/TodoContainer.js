import React from "react";
import CreateTodo from "../createTodo/CreateTodo";
import TodoList from "../TodoList/TodoList";
import { EnvironmentContext } from "../../EnviromentContext";
import { RelayEnvironmentProvider } from "relay-hooks";
import { environment } from "../../Environment";

const TodoContainer = () => (
  <EnvironmentContext.Provider
    value={{
      environment,
    }}
  >
    <RelayEnvironmentProvider environment={environment}>
      <CreateTodo></CreateTodo>
      <TodoList></TodoList>
    </RelayEnvironmentProvider>
  </EnvironmentContext.Provider>
);

export default TodoContainer;
