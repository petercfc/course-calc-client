import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../withRoot";
import CreateStudentButton from "../components/createStudentButton";

const styles = theme => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing(20)
  }
});

class Calculator extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="h4" gutterBottom>
          Course Credit Calculator
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Determine the courses and number of credits required to graduate.
        </Typography>
        <CreateStudentButton />
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(Calculator));
