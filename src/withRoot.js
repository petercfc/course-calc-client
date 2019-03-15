import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import teal from "@material-ui/core/colors/teal";
import pink from "@material-ui/core/colors/pink";
import CssBaseline from "@material-ui/core/CssBaseline";

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: teal[300],
      main: teal[500],
      dark: teal[700]
    },
    secondary: {
      light: pink[300],
      main: pink[500],
      dark: pink[700]
    }
  },
  overrides: {
    MuiPaper: {
      rounded: {
        borderRadius: 8
      }
    },
    MuiButton: {
      root: {
        textTransform: "none"
      }
    },
    MuiDialogActions: {
      root: {
        marginLeft: 0,
        marginRight: 0
      }
    },
    MuiDialogTitle: {
      root: {
        paddingLeft: 0
      }
    }
  }
});

function withRoot(Component) {
  function WithRoot(props) {
    // ThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props} />
      </ThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
