import React, { Fragment } from 'react'
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
import { CustomConfirmationModal } from '../../../components/customConfirmationModal';
import { useModal } from '../../../shared/hooks/useModal';

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
  const dispatch = useDispatch();
  const [isOpened, setIsOpened, toggle] = useModal(false);

  const dataModal: any = {
    title: "Do you want remove this task?",
    description: "You will never be able to see it again"
  };

  const actionModal = (confirm: boolean) => {
    if (confirm) dispatch(deleteTask(props.task.id));
    setIsOpened(false);
  };

  return (
    <Fragment>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Typography variant="h2">
            {props.task.title}
          </Typography>
          <Typography variant="body1">
            {props.task.description}
          </Typography>
        </CardContent>
        <CardActions className={classes.cartActions}>
          <Button
            onClick={toggle}
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

      <CustomConfirmationModal
        isActive={isOpened}
        toggleFunction={actionModal}
        title={dataModal.title}
        description={dataModal.description}
      />
    </Fragment>
  );
}

interface ITaskProps {
  task: ITask;
}

export default TaskItem;

