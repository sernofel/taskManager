import React from 'react'
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import "../styles/card.scss";
import { ITask } from './Task';

function TaskItem(props: ITaskProps) {
  return (
    <Card className="card" variant="outlined">
      <CardContent>
        <Typography component="h1" variant="h5">
          {props.task.title}
        </Typography>
        <Typography component="h1" variant="body1">
          {props.task.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => props.deleteAtask(props.task.id)}
          color="secondary"
          size="small"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

interface ITaskProps {
  task: ITask;
  deleteAtask: (id: string) => void;
}

export default TaskItem

