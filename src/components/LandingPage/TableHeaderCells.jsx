import React from "react";
import PropTypes from "prop-types";
import { Checkbox, TableCell, TableHead, TableRow } from "@material-ui/core";
import Polygon2 from "../../assets/Polygon2.svg";
import Polygon1 from "../../assets/Polygon1.svg";

const headCells = [
  { id: "name", align: "left", disablePadding: true, label: "Customer Name" },
  {
    id: "customerNumber",
    align: "right",
    disablePadding: false,
    label: "Customer #",
  },
  {
    id: "invoiceNumber",
    align: "right",
    disablePadding: false,
    label: "Invoice #",
  },
  {
    id: "invoiceAmount",
    align: "right",
    disablePadding: false,
    label: "Invoice Amount",
    sortable: true,
  },
  {
    id: "dueDate",
    align: "right",
    disablePadding: false,
    label: "Due Date",
    sortable: true,
  },
  {
    id: "predictedPaymentDate",
    align: "right",
    disablePadding: false,
    label: "Predicted Payment Date",
  },
  {
    id: "predictedAgingBucket",
    align: "right",
    disablePadding: false,
    label: "Predicted Aging Bucket",
  },
  { id: "notes", align: "right", disablePadding: false, label: "Notes" },
];

const TableHeaderCells = (props) => {
  const { onSelectAllClick, numSelected, rowCount } = props;

  return (
    <TableHead className="w-100">
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            padding={headCell.disablePadding ? "none" : "default"}
          >
            <div className="d-flex text-center">
              {headCell.label}
              {headCell.sortable ? (
                <div className="d-flex flex-column poly-box ml-1">
                  <img src={Polygon2} alt="polygon" className="img-fluid" />
                  <img
                    src={Polygon1}
                    alt="polygon"
                    className="img-fluid mt-1"
                  />
                </div>
              ) : (
                  ""
                )}
            </div>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

TableHeaderCells.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default TableHeaderCells;
