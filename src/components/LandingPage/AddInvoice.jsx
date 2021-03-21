import "date-fns";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Snackbar,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { Alert } from "@material-ui/lab";

const AddInvoice = (props) => {
  const { open, handleClose } = props;
  const [selectedDate, handleDateChange] = useState(null);
  const [name, setName] = useState(null);
  const [customer, setCustomer] = useState(null);
  const [invoice, setInvoice] = useState(null);
  const [amount, setAmount] = useState(null);
  const [error, setError] = useState({});
  const [showError, setShowError] = useState(false);

  const handleSubmit = () => {
    if (!name || !customer || !invoice || !amount) {
      setError({
        name: !name ? true : false,
        customer: !customer ? true : false,
        amount: !amount ? true : false,
        invoice: !invoice ? true : false,
        selectedDate: !selectedDate ? true : false,
      });
      setShowError(true);
    } else {
      setError({});
      handleClose();
      handleClear();
    }
  };

  const handleClear = () => {
    setName(null);
    setCustomer(null);
    setAmount(null);
    setInvoice(null);
    handleDateChange(null);
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
      maxWidth="md"
      fullWidth
    >
      <DialogTitle>
        <div className="d-flex">
          Add Invoice
          <div className="flex-grow-1" />
          <IconButton onClick={handleClose} className="m-0 p-0 ml-2">
            <CloseIcon className="text-white" />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={0}>
          <Grid item md={6} className="p-2">
            <div className="d-flex mb-4">
              <div className="width-150 mr-2">
                <Typography variant="p" className="font-size-8">
                  Customer Name <span className="text-red">*</span>
                </Typography>
              </div>
              <TextField
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={error.name}
                fullWidth
                variant="outlined"
              />
            </div>
            <div className="d-flex mb-4">
              <div className="width-150 mr-2">
                <Typography variant="p" className="font-size-8">
                  Customer No. <span className="text-red">*</span>
                </Typography>
              </div>
              <TextField
                value={customer}
                onChange={(e) => setCustomer(e.target.value)}
                error={error.customer}
                fullWidth
                variant="outlined"
              />
            </div>
            <div className="d-flex mb-4">
              <div className="width-150 mr-2">
                <Typography variant="p" className="font-size-8">
                  Invoice No. <span className="text-red">*</span>
                </Typography>
              </div>
              <TextField
                value={invoice}
                onChange={(e) => setInvoice(e.target.value)}
                error={error.invoice}
                fullWidth
                variant="outlined"
              />
            </div>
            <div className="d-flex mb-4">
              <div className="width-150 mr-2">
                <Typography variant="p" className="font-size-8">
                  Invoice Amount <span className="text-red">*</span>
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
          </Grid>
          <Grid item md={6} className="p-2">
            <div className="d-flex mb-4">
              <div className="width-150 mr-2">
                <Typography variant="p" className="font-size-8">
                  Due Date <span className="text-red">*</span>
                </Typography>
              </div>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  variant="inline"
                  error={error.selectedDate}
                  className="date-field"
                  inputVariant="outlined"
                  format="dd/MM/yyyy"
                  fullWidth
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              </MuiPickersUtilsProvider>
            </div>
            <div className="d-flex mb-4">
              <div className="width-150 mr-2">
                <Typography variant="p" className="font-size-8">
                  Notes
                </Typography>
              </div>
              <TextField fullWidth rows="4" multiline variant="outlined" />
            </div>
          </Grid>
        </Grid>
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

export default AddInvoice;
