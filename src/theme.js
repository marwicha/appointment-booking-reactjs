import { createMuiTheme } from "@material-ui/core/styles";
import indigo from "@material-ui/core/colors/indigo";
import orange from "@material-ui/core/colors/orange";
import red from "@material-ui/core/colors/red";

const themeOptions = {
  palette: {
    type: "light",
    primary: indigo,
    secondary: orange,
    first: '#182732' ,
    second: '#394d5b',
    third: '#dfe5e6',
    fourth: 'rgba(242,104,90,1)',
    five: 'rgb(245, 245, 245)',
    error: red,
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
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
    }
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
