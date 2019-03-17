import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../withRoot";
import CreateStudentButton from "../components/createStudentButton";
import Student from "../components/student";
import Students from "../components/students";
import SelectStudent from "../components/selectStudent";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing(20)
  }
});

class Calculator extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
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
        <Student />
        <Students />
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleClickOpen}
        >
          Select Student
        </Button>
        <SelectStudent
          selectedValue={this.state.selectedValue}
          open={this.state.open}
          onClose={this.handleClose}
        />
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(Calculator));
