import * as React from "react";
import TaskItem from "./TaskItem";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, Typography, CircularProgress } from "@material-ui/core";
import { Fragment, useEffect } from "react";
import { selectGetTasks, fetchTasks, State } from "../store/";

const useStyles = makeStyles(theme => ({
  spinner: {
    backgroundColor: "#f3f8f8",
    height: '60px',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  },
  title: {
    textAlign: "center",
    background: "#f3f8f8",
    borderRadius: "10px"
  },
  text: {
    textAlign: "center"
  },
  containerCard: {
    display: "flex",
    margin: "20px",
    flexWrap: "wrap"
  }
}));

const TaskList = () => {
  const classes = useStyles();
  const tasksStore: State = useSelector(selectGetTasks);
  const dispatch = useDispatch();

  useEffect( () => {
    // Warning missing dependency:  react-hooks/exhaustive-deps
    dispatch(fetchTasks.request());
  }, [])

  return (
    <Fragment>
      {tasksStore.isLoading ? (
        <div className={classes.spinner}>
          <CircularProgress />
        </div>
      ) : (
        <Fragment>
          <Typography component="h1" variant="h5" className={classes.title}>
            Listed tasks:
          </Typography>
          {tasksStore.tasks.length ? (
            <div className={classes.containerCard}>
              {tasksStore.tasks.map(task => (
                <TaskItem task={task} key={task.id} />
              ))}
            </div>
          ) : (
            <p className={classes.text}>You dont have tasks created</p>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default TaskList;
