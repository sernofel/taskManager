import * as React from "react";
import { ITask } from "./Task";

import TaskItem from "./TaskItem";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  containerCard: {
    display: "flex",
    margin: "20px",
    flexWrap: "wrap"
  }
}));

const mapStateToProps = (state: any) => {
  console.log(state)
  return { tasks: state.tasks.tasks };
}

const TaskList = (props: ITaskListProps) => {
  const tasks = props.tasks;
  const classes = useStyles();


  return (
    <div className={classes.containerCard}>
      {tasks.map(task => (
        <TaskItem
          task={task}
          key={task.id}
        />
      ))}
    </div>
  );
};

interface ITaskListProps {
  tasks: ITask[]
}

const ConnectedTaskList = connect(mapStateToProps)(TaskList)

export default ConnectedTaskList;
