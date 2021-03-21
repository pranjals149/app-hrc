import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    IconButton,
    MenuItem,
    Select,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
  } from "@material-ui/core";
  import React, { useEffect, useState } from "react";
  import { getDate } from "../../utils/getDate";
  import CloseIcon from "@material-ui/icons/Close";
  
  const ViewCorrespondence = (props) => {
    const { open, handleClose, invoices, selected } = props;
    const [rows, setRows] = useState([]);
    const [template, setTemplate] = useState("template1");
  
    const template1Text = (
      <Typography variant="p" className="font-size-8">
        Subject: Invoice Details - {`{Account Name}`}
        <br />
        <br />
        Dear Sir/Madam,
        <br />
        <br />
        Gentle reminder that you have one or more open invoices on your account.
        Please get back to us with an expected date of payment. If you have any
        specific issue with the invoice(s), please let us know so that we can
        address it at the earliest.
        <br />
        <br />
        Please find the details of the invoices below:
      </Typography>
    );
  
    const template2Text = (
      <Typography variant="p" className="font-size-8">
        Subject: Invoice Details - {`{Account Name}`}
        <br />
        <br />
        Dear Sir/Madam,
        <br />
        Greetings!
        <br />
        <br />
        This is to remind you that there are one or more open invoices on your
        account. lease provide at your earliest convenience an update on the
        payment details or clarify the reason for the delay. If you have any
        specific issue with the invoice(s), please let us know so that we can
        address it to the correct Department.
        <br />
        <br />
        Please find the details of the invoices below:
      </Typography>
    );
  
    useEffect(() => {
      if (selected.length > 0) {
        setRows(
          invoices.filter((elm) => selected.find((obj) => obj === elm.invoice_id))
        );
      }
    }, [selected, invoices]);
    return (
      <Dialog
        scroll="paper"
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
      >
        <DialogTitle>
          <div className="d-flex">
            View Correspondence (2)
            <div className="flex-grow-1" />
            <p className="font-size-8 mr-2">View:</p>
            <FormControl variant="outlined" className="mt-2">
              <Select
                value={template}
                onChange={(e) => setTemplate(e.target.value)}
              >
                <MenuItem value="template1">Template 1</MenuItem>
                <MenuItem value="template2">Template 2</MenuItem>
              </Select>
            </FormControl>
            <IconButton onClick={handleClose} className="m-0 p-0 ml-2">
              <CloseIcon className="text-white" />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent dividers>
          {template === "template1" ? template1Text : template2Text}
          <TableContainer className="my-4">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Invoice Number</TableCell>
                  <TableCell align="right">PO Number</TableCell>
                  <TableCell align="right">Invoice date</TableCell>
                  <TableCell align="right">Due Date</TableCell>
                  <TableCell align="right">currency</TableCell>
                  <TableCell align="right">Open Amount($)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.invoice_id}>
                    <TableCell component="th" scope="row">
                      {row.invoice_id}
                    </TableCell>
                    <TableCell align="right">{row.invoice_id}</TableCell>
                    <TableCell align="right">
                      {getDate(row.posting_date)}
                    </TableCell>
                    <TableCell align="right">
                      {getDate(row.due_in_date)}
                    </TableCell>
                    <TableCell align="right">{row.invoice_currency}</TableCell>
                    <TableCell align="right">{row.total_open_amount}K</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="p" className="font-size-8">
            Total Amount to be Paid: $124.00K
            <br />
            <br />
            In case you have already made a payment for the above items, please
            send us the details to ensure the payment is posted. Let us know if we
            can be of any further assistance. Looking forward to hearing from you.
            <br />
            <br />
            Kind Regards,
            <br />
            [Sender’s First Name][Sender’s Last Name]
            <br />
            Phone : [Sender’s contact number]
            <br />
            Fax : [If any]
            <br />
            Email : [Sender’s Email Address]
            <br />
            Company Name[Sender’s Company Name]
          </Typography>
        </DialogContent>
        <DialogActions>
          <div className="flex-grow-1" />
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" variant="contained">
            Download
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  
  export default ViewCorrespondence;
  