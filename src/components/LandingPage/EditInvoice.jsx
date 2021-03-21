import "date-fns";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Snackbar,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { Alert } from "@material-ui/lab";

const EditInvoice = (props) => {
  const { open, handleClose } = props;
  const [amount, setAmount] = useState("$56354.52");
  const [error, setError] = useState({});
  const [showError, setShowError] = useState(false);

  const handleSubmit = () => {
    if (!amount) {
      setError({
        amount: !amount ? true : false,
      });
      setShowError(true);
    } else {
      setError({});
      handleClose();
      handleClear();
    }
  };

  const handleClear = () => {
    setAmount(null);
    setError({});
  };

  const handleCloseError = () => {
    setShowError(false);
  };

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
          Edit Invoice <div className="flex-grow-1" />
          <IconButton onClick={handleClose} className="m-0 p-0 ml-2">
            <CloseIcon className="text-white" />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>
        <div className="d-flex mb-4">
          <div className="width-150 mr-2">
            <Typography variant="p" className="font-size-8">
              Invoice Amount
            </Typography>
          </div>
          <TextField
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            error={error.amount}
            fullWidth
            variant="outlined"
          />
        </div>

        <div className="d-flex mb-4">
          <div className="width-150 mr-2">
            <Typography variant="p" className="font-size-8">
              Notes
            </Typography>
          </div>
          <TextField
            defaultValue="Lorem Ipsum dolor sit amet"
            fullWidth
            rows="4"
            multiline
            variant="outlined"
          />
        </div>
      </DialogContent>
      <DialogActions className="w-100 text-left">
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <div className="flex-grow-1" />
        <Button onClick={handleClear} color="primary" variant="outlined">
          Clear
        </Button>
        <Button onClick={handleSubmit} color="primary" variant="contained">
          Add
        </Button>
      </DialogActions>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={showError}
        autoHideDuration={6000}
        onClose={handleCloseError}
      >
        <Alert onClose={handleCloseError} severity="warning">
          Mandatory fields can't be empty
        </Alert>
      </Snackbar>
    </Dialog>
  );
};

export default EditInvoice;
