import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import SimpleMenu from "./components/navbar";
import { ITask } from "./components/Task";
import { Copyright } from "./components/Copyright";
import { Box } from "@material-ui/core";

const App = (props: Iprops) => {
  const value: ITask[] = []

  const [tasks, setTask] = useState(value);

  const addNewTask = (task: ITask) => setTask([...tasks, task]);

  const deleteATask = (id: string) => setTask(tasks.filter(
      (task: ITask) => task.id !== id
    ))

    return (
      <div>
        <SimpleMenu />
        <div>
          <TaskForm addNewTask={(task) => addNewTask(task)} />
          <TaskList tasks={tasks} deleteATask={deleteATask}/>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </div>
    );
}

interface Iprops {
  title: string;
}

interface IState {
  tasks: ITask[];
}

export default App;
