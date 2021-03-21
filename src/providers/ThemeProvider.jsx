import { createMuiTheme } from "@material-ui/core";

export const pxToRem = px => `${px / 22.5}rem`;
export const pxToVw = px =>
  `${(100 / document.documentElement.clientWidth) * px}vw`;

export const pxToVh = px =>
  `${px / (document.documentElement.clientHeight * 0.01)}vh`;

export default createMuiTheme({
  palette: {
    primary: {
      main: '#1B1F38',
      light: 'rgb(93,175,240,0.5)',
      dark: 'rgb(93,175,240,0.2)'
    }
  }
});


export const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#3F4F64",
    },
    secondary: {
      main: "#f1f1f1",
    },
    danger: {
      main: "#501b1d",
    },
  },
  typography: {
    fontFamily: "Ubuntu, sans-serif",
    fontSize: 14,
    margin: 0,
    color: "#fff",
  },
  props: {
    MuiButton: {
      disableRipple: true,
    },
    MuiTab: {
      disableRipple: true,
    },
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: "10px",
        lineHeight: 1.5,
        textTransform: "capitalize",
      },
      containedPrimary: {
        color: "#fff",
      },
      outlinedPrimary: {
        color: "#fff",
      },
    },

    MuiPaper: {
      root: {
        borderRadius: "10px",
        background: "#273D49CC 0% 0% no-repeat padding-box",
      },
    },
    MuiSelect: {
      outlined: {
        borderColor: "#14AFF1",
        backgroundColor: "#283A46",
      },
    },
    MuiList: {
      root: {
        backgroundColor: "#283A46",
        color: "#fff",
      },
    },
    MuiTableCell: {
      stickyHeader: {
        color: "#97A1A9",
        backgroundColor: "#273d49",
      },
      head: {
        color: "#97A1A9",
      },
      root: {
        borderBottom: "none",
      },
      body: {
        color: "#fff",
      },
    },
    MuiTable: {
      stickyHeader: {
        backgroundColor: "#273d49",
      },
    },

    MuiTableSortLabel: {
      root: {
        color: "#fff",
      },
    },
    MuiTableRow: {
      root: {
        "&:MuiSelected": {
          backgroundColor: "#2A5368",
        },
        "&:nth-of-type(even)": {
          backgroundColor: "#283A46",
        },
      },
    },
    MuiCircularProgress: {
      root: {
        width: "30px",
        height: "30px",
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: "10px",
      },
      input: {
        padding: 8,
        paddingLeft: 14,
        color: "#fff",
      },
    },
    MuiDialog: {
      paper: {
        borderRadius: "8px",
        color: "#fff",
      },
    },
    MuiDialogTitle: {
      root: {
        backgroundColor: "#2A3E4C",
      },
    },
    MuiDialogContent: {
      root: {
        backgroundColor: "#2A3E4C",
      },
    },
    MuiDialogContentText: {
      root: {
        color: "#fff",
      },
    },
    MuiDialogActions: {
      root: {
        backgroundColor: "#2A3E4C",
      },
    },
    MuiTypography: {
      body1: {
        color: "#fff",
        fontWeight: 600,
      },
    },
  },
});
