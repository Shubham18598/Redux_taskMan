// App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Task Management Application</h1>
        <TaskList />
        <TaskForm />
      </div>
    </Provider>
  );
}

export default App;
