import React from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import SimpleMenu from "./components/navbar";
import { Copyright } from "./components/Copyright";
import { Box } from "@material-ui/core";

const App = () => {
    return (
      <div className="app-root">
        {/* <SimpleMenu /> */}
        <div className="app-content">
          <TaskForm />
          <TaskList />
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </div>
    );
}

export default App;
