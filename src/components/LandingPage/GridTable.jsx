import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import TableToolbar from "./TableToolbar";
import TableHeaderCells from "./TableHeaderCells";
import { data } from "../../services/data";
import errorOutline from "../../assets/errorOutline.svg";
import { Button } from "@material-ui/core";
import InfiniteScroll from "react-infinite-scroll-component";
import ComponentLoader from "../Loader/ComponentLoader";
import { getDate } from "../../utils/getDate";
import ViewCorrespondence from "./ViewCorrespondence";
import AddInvoice from "./AddInvoice";
import EditInvoice from "./EditInvoice";
import DeleteInvoice from "./DeleteInvoice";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));

const GridTable = () => {
  const classes = useStyles();
  const [selected, setSelected] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const [filteredInvoices, setFilteredInvoices] = useState(null);
  const [page, setPage] = useState(1);
  const [searchKey, setSearchKey] = useState("");
  const [openView, setOpenView] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const handleClose = () => {
    setOpenView(false);
    setOpenAdd(false);
    setOpenEdit(false);
    setOpenDelete(false);
  };

  const getData = async (skip, limit) => {
    setInvoices(data.slice(skip, limit));
  };

  useEffect(() => {
    getData(0, 40);
  }, []);

  const handleSearch = async (sKey) => {
    if (sKey.length > 0) {
      setSearchKey(sKey.toString());
      console.log(invoices[0].invoice_id.toString());
      setFilteredInvoices(
        invoices.filter((invoice) =>
          invoice.invoice_id.toString().includes(sKey.toString())
        )
      );
    } else {
      setFilteredInvoices(null);
    }
  };

  const clearSearch = async () => {
    setSearchKey("");
    setFilteredInvoices(null);
  };

  const loadMore = async () => {
    setTimeout(() => {
      setInvoices([...invoices, ...data.slice(page * 40 + 1, page * 40 + 40)]);
      setPage(page + 1);
    }, 1500);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = data.map((n) => n.invoice_id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, invoice_id) => {
    const selectedIndex = selected.indexOf(invoice_id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, invoice_id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
    console.log(newSelected);
  };

  const isSelected = (invoice_id) => selected.indexOf(invoice_id) !== -1;

  return (
    <div className="h-100">
      <Paper className="table-container p-2" elevation={0}>
        <TableToolbar
          selected={selected}
          handleSearch={handleSearch}
          searchKey={searchKey}
          clearSearch={clearSearch}
          filteredInvoices={filteredInvoices}
          setOpenView={setOpenView}
          setOpenAdd={setOpenAdd}
          setOpenEdit={setOpenEdit}
          setOpenDelete={setOpenDelete}
        />
        <TableContainer>
          <div className="vh-70 overflow-auto">
            {(filteredInvoices ? filteredInvoices : invoices).length > 0 ? (
              <InfiniteScroll
                dataLength={invoices.length}
                next={() => loadMore()}
                hasMore={true}
                height="70vh"
                loader={<ComponentLoader height="20vh" />}
              >
                <Table stickyHeader className="vh-70 overflow-auto">
                  <TableHeaderCells
                    classes={classes}
                    numSelected={selected.length}
                    onSelectAllClick={handleSelectAllClick}
                    rowCount={data.length}
                  />
                  <TableBody className="vh-70 overflow-auto">
                    {(filteredInvoices ? filteredInvoices : invoices).map(
                      (row, index) => {
                        const isItemSelected = isSelected(row.invoice_id);
                        const labelId = `enhanced-table-checkbox-${index}`;

                        return (
                          <TableRow
                            hover
                            onClick={(event) =>
                              handleClick(event, row.invoice_id)
                            }
                            role="checkbox"
                            aria-checked={isItemSelected}
                            tabIndex={-1}
                            key={row.invoice_id}
                            selected={isItemSelected}
                          >
                            <TableCell padding="checkbox">
                              <Checkbox
                                color="primary"
                                checked={isItemSelected}
                                inputProps={{ "aria-labelledby": labelId }}
                              />
                            </TableCell>
                            <TableCell
                              component="th"
                              id={labelId}
                              scope="row"
                              padding="none"
                            >
                              {index} {row.name_customer}
                            </TableCell>
                            <TableCell align="center">
                              {row.cust_number}
                            </TableCell>
                            <TableCell align="center">
                              {row.invoice_id}
                            </TableCell>
                            <TableCell align="center">
                              {row.total_open_amount}K
                            </TableCell>
                            <TableCell align="center">
                              {getDate(row.due_in_date)}
                            </TableCell>
                            <TableCell align="center">-</TableCell>
                            <TableCell align="center">-</TableCell>
                            <TableCell align="center">Lorem ipsum...</TableCell>
                          </TableRow>
                        );
                      }
                    )}
                  </TableBody>
                </Table>
              </InfiniteScroll>
            ) : (
              <div className="container d-flex flex-column justify-content-center w-100 h-100">
                <div className="w-100 text-center">
                  <img
                    src={errorOutline}
                    alt="error"
                    className="img-fluid error-emg m-0 p-0"
                  />
                  <h4 className=" m-2 text-white">No results found</h4>
                  <p className="small text-white font-size-8">
                    Try adjusting your search to find what you are looking for.
                  </p>
                  <Button onClick={clearSearch} variant="text" color="primary">
                    Clear Search
                  </Button>
                </div>
              </div>
            )}
          </div>
        </TableContainer>
      </Paper>
      <ViewCorrespondence
        open={openView}
        handleClose={handleClose}
        invoices={invoices}
        selected={selected}
      />
      <AddInvoice
        open={openAdd}
        handleClose={handleClose}
        invoices={invoices}
        setInvoices={setInvoices}
      />
      <EditInvoice
        open={openEdit}
        handleClose={handleClose}
        invoices={invoices}
        setInvoices={setInvoices}
      />
      <DeleteInvoice
        open={openDelete}
        handleClose={handleClose}
        invoices={invoices}
        setInvoices={setInvoices}
      />
    </div>
  );
};

export default GridTable;
