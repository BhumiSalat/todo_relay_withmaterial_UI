import React from "react";
import { RelayEnvironmentProvider } from "relay-hooks";
import "antd/dist/antd.css";
import { environment } from "./Environment";
import { Routes } from "./routing/routes";
//import { TodoList } from "../src/screens/TodoList";

import { EnvironmentContext } from "./EnviromentContext";

const App = () => (
  <EnvironmentContext.Provider
    value={{
      environment,
    }}
  >
    <RelayEnvironmentProvider environment={environment}>
      <Routes />
      {/* <TodoList /> */}
    </RelayEnvironmentProvider>
  </EnvironmentContext.Provider>
);
export default App;
