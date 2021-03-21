import "date-fns";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@material-ui/core";
import React from "react";
import CloseIcon from "@material-ui/icons/Close";

const DeleteInvoice = (props) => {
  const { open, handleClose } = props;

  return (
    <Dialog
      scroll="paper"
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>
        <div className="d-flex">
          Delete record(s)? <div className="flex-grow-1" />
          <IconButton onClick={handleClose} className="m-0 p-0 ml-2">
            <CloseIcon className="text-white" />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>
        <Typography variant="p" className="font-size-8">
          You'll lose your record(s) after this action. We can't recover them
          once you delete.
          <br />
          <br />
          Are you sure you want to{" "}
          <span className="text-red">permanently delete</span> them?
        </Typography>
      </DialogContent>
      <DialogActions className="w-100 text-left">
        <div className="flex-grow-1" />
        <Button onClick={handleClose} color="primary" variant="outlined">
          Cancle
        </Button>
        <Button onClick={handleClose} color="primary" variant="contained">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteInvoice;
