import { CircularProgress, Typography } from "@material-ui/core";
import React from "react";
import { loaderStyles } from "./loader.styles";

const ComponentLoader = ({ height }) => {
  const classes = loaderStyles();
  return (
    <div className={classes.loading} style={{ minHeight: height }}>
      <div className={classes.loadingInner}>
        <CircularProgress
          className="d-block mb-2 progress"
          variant="indeterminate"
          color="primary"
          size={30}
          thickness={2}
        />
        <br />
        <Typography variant="p" className="font-size-8 text-white">
          Loading
        </Typography>
      </div>
    </div>
  );
};

export default ComponentLoader;
