import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

const themeOptions = {
  palette: {
    type: "light",
    primary: { main: "#78b9dc" },
    danger: { main: "red" },
    first: "#182732",
    second: "#394d5b",
    third: "#dfe5e6",
    fourth: "rgba(242,104,90,1)",
    five: "rgb(245, 245, 245)",
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    useNextVariants: true,
    fontFamily: ["LEMON MILK"],
    h1: {
      fontFamily: "LEMON MILK",
    },
    p: {
      fontFamily: "LEMON MILK",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
      },
    },
    MuiCard: {
      root: {
        borderRadius: 8,
      },
    },
    MuiFab: {
      root: {
        textTransform: "none",
      },
    },
  },
};

export const Theme = createMuiTheme({
  ...themeOptions,
});

export const FooterTheme = createMuiTheme({
  ...themeOptions,
  palette: {
    type: "dark",
  },
});
