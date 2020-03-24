import * as React from "react";
import { ITask } from "./Task";

import { Fragment } from "react";
import TaskItem from "./TaskItem";

const TaskList = (props: ITaskListProps) => {
  const tasks = props.tasks;

  return (
    <Fragment>
      {tasks.map(task => (
        <TaskItem
          task={task}
          deleteAtask={(idTask: string) => props.deleteATask(idTask)}
          key={task.id}
        />
      ))}
    </Fragment>
  );
};

interface ITaskListProps {
  tasks: ITask[]
  deleteATask: (id: string) => void
}

export default TaskList;
