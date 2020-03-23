import React from 'react'
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  makeStyles,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/Check";
import { useDispatch } from 'react-redux';
import { deleteTask, completeTask } from '../store';
import { ITask } from '../models/Task';

const useStyles = makeStyles(theme => ({
  card: {
    background: "azure",
    maxWidth: "300px",
    minWidth: "250px",
    margin: "20px",
    textAlign: "center"
  },
  cartActions: {
    justifyContent: 'space-around'
  }
}));

function TaskItem(props: ITaskProps) {
  const classes = useStyles();
  const dispatch = useDispatch()

  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <Typography component="h1" variant="h5">
          {props.task.title}
        </Typography>
        <Typography component="h1" variant="body1">
          {props.task.description}
        </Typography>
      </CardContent>
      <CardActions className={classes.cartActions}>
        <Button
          onClick={() => dispatch(deleteTask(props.task.id))}
          color="secondary"
          size="small"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
        {props.task.completed ? (
          <CheckIcon />
        ) : (
          <FormControlLabel
            control={
              <Checkbox
                value="checkedB"
                color="primary"
                checked={props.task.completed}
                onChange={() => dispatch(completeTask(props.task.id))}
              />
            }
            label="Completed"
          />
        )}
      </CardActions>
    </Card>
  );
}

interface ITaskProps {
  task: ITask;
}

export default TaskItem;

