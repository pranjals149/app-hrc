import React from "react";
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
} from "@material-ui/core";
import iconPlus from "../../assets/iconPlus.svg";
import iconMinus from "../../assets/iconMinus.svg";
import iconPencil from "../../assets/iconPencil.svg";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

const TableToolbar = (props) => {
  const {
    setOpenView,
    handleSearch,
    selected,
    searchKey,
    clearSearch,
    filteredInvoices,
    setOpenAdd,
    setOpenEdit,
    setOpenDelete,
  } = props;
  return (
    <Toolbar className="p-2">
      <Grid container>
        <Grid item xs={12} md={6} className="d-flex p-2 justi">
          <Button
            disabled={selected.length === 0}
            className="mx-1"
            color="primary"
            variant="contained"
          >
            Predict
          </Button>
          <Button
            disabled={selected.length === 0}
            className="mx-1"
            color="primary"
            variant="outlined"
            onClick={() => setOpenView(true)}
          >
            View Correspondence
          </Button>
        </Grid>
        <Grid item xs={12} md={6} className="d-flex p-2">
          <div className="flex-grow-1 desktopSection" />
          <Button
            onClick={() => setOpenAdd(true)}
            className="mx-1"
            color="primary"
            variant="outlined"
          >
            <img src={iconPlus} alt="icon" className="img-fluid mr-2" /> Add
          </Button>
          <Button
            disabled={selected.length !== 1}
            className="mx-1"
            color="primary"
            variant="outlined"
            onClick={() => setOpenEdit(true)}
          >
            <img src={iconPencil} alt="icon" className="img-fluid mr-2" /> Edit
          </Button>
          <Button
            disabled={selected.length === 0}
            className="mx-1"
            color="primary"
            variant="outlined"
            onClick={() => setOpenDelete(true)}
          >
            <img src={iconMinus} alt="icon" className="img-fluid mr-2" /> Delete
          </Button>
          <TextField
            className="m-1"
            variant="outlined"
            value={searchKey}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search by Invoice Number"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {filteredInvoices && filteredInvoices.length === 0 ? (
                    <IconButton onClick={clearSearch} className="m-0 p-0">
                      <CloseIcon className="text-red" />
                    </IconButton>
                  ) : (
                    <SearchIcon color="secondary" />
                  )}
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
    </Toolbar>
  );
};

export default TableToolbar;
