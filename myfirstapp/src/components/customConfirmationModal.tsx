import React, { Fragment } from "react";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  modalContainer: {
    marginBottom: '20px'
  },
  buttonsContainer: {
    justifyContent: 'inherit'
  }
}));

export const CustomConfirmationModal = ({isActive, toggleFunction, ...props}: ICustomModal) => {
  const classes = useStyles();

  const handleClose = (confirm: boolean) => {
    toggleFunction(confirm)
  }

  return (
    <Fragment>
      <Dialog
        open={isActive}
        onClose={() => handleClose(false)}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        className={classes.modalContainer}
      >
        <DialogTitle id="dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            {props.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.buttonsContainer}>
          <Button
            onClick={() => handleClose(true)}
            variant="contained"
            color="primary"
            autoFocus
          >
            Agree
          </Button>
          <Button
            onClick={() => handleClose(false)}
            variant="outlined"
            color="secondary"
          >
            Disagree
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

interface ICustomModal {
  isActive: boolean
  title: string
  description: string
  toggleFunction: (confirm: boolean) => void
} 