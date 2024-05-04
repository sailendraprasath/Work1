// App.js
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducer from "./reducers";
import TaskInput from "./Components/TaskInputs";
import TaskList from "./Components/TaskLists";

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mt-[200px] text-center">
          Task Manager
        </h1>
        <TaskInput />
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;
