import { createMuiTheme } from "@material-ui/core/styles";
import pink from "@material-ui/core/colors/pink";
import teal from "@material-ui/core/colors/teal";

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
  }
});

export default theme;
