// other
import React from "react";

// material-ui
import withRoot from "../withRoot";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

//components
import CreateStudentDialog from "./createStudentDialog";

// create material-ui styles init with theme
const styles = theme => ({
  root: {}
});

// main class
class CreateStudentButton extends React.Component {
  // init state
  state = {
    open: false
  };

  // handle dialog open
  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  // hanndle dialog close
  handleClose = () => {
    this.setState({ open: false });
  };

  // render main
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          Create Student
        </Button>
        <CreateStudentDialog
          open={this.state.open}
          onClose={this.handleClose}
        />
      </div>
    );
  }
}

// export main with material-ui styles
export default withRoot(withStyles(styles)(CreateStudentButton));
