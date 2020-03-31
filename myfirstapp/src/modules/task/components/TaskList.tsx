import * as React from "react";
import TaskItem from "./TaskItem";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, Typography, CircularProgress, Button } from "@material-ui/core";
import { Fragment, useEffect, useCallback } from "react";
import { selectGetTasks, fetchTasks, State } from "../store/";
import { OperationStatus } from "../../../shared/models/operationStatus";
import { CustomTheme } from "../../ui/theme";

const useStyles = makeStyles((theme: CustomTheme) => ({
  containerMessage: {
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
    margin: `${theme.spacing(5)}px`,
    flexWrap: "wrap"
  },
  errorTry: {
    marginLeft: '15px'
  }
}));

const TaskList = () => {
  const classes = useStyles();
  const tasksStore: State = useSelector(selectGetTasks);
  const dispatch = useDispatch();

  // Solution to warning --> missing dependency:  react-hooks/exhaustive-deps
  const initFetch = useCallback(() => {
    dispatch(fetchTasks.request());
  }, [dispatch])

  useEffect(() => {
    initFetch();
  }, [initFetch]);
  
  const FETCH_STATUS_STATE = {
    [OperationStatus.SUCCESS]: (
      <Fragment>
        <Typography variant="h5" className={classes.title}>
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
    ),

    [OperationStatus.IN_PROGRESS]: (
      <div className={classes.containerMessage}>
        <CircularProgress />
      </div>
    ),

    [OperationStatus.FAILED]: (
      <div className={classes.containerMessage}>
        <Typography variant="body1">
          One error has ocurrect
        </Typography>
        <Button
          onClick={initFetch}
          // variant="contained"
          color="secondary"
          className={`${classes.errorTry} tryAgain`}
        >
          Try again!
        </Button>
      </div>
    )
  };

  return (
    <Fragment>
      {FETCH_STATUS_STATE[tasksStore.operationStatus || OperationStatus.IN_PROGRESS]}
    </Fragment>
  );
};

export default TaskList;
