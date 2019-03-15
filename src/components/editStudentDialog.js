// other
import React from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

// apollo
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

// material-ui
import withRoot from "../withRoot";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

// create material-ui styles init with theme
const styles = theme => ({
  root: {}
});

//create student mutation
const EDIT_STUDENT = gql`
  mutation createStudent($data: StudentEditInput!) {
    editStudent(data: $data) {
      name
    }
  }
`;

// main class
class EditStudentDialog extends React.Component {
  state = {
    name: ""
  };

  // handle dialog close
  handleClose = () => {
    this.props.onClose();
    this.resetTextField();
  };

  // handle textfield change
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  // remove input from text field
  resetTextField = () => {
    this.setState({ name: "" });
  };

  // render main
  render() {
    const { classes, onClose, ...other } = this.props;
    return (
      <Mutation mutation={EDIT_STUDENT}>
        {(editStudent, { data }) => (
          <div className={classes.root}>
            <Dialog
              onClose={this.handleClose}
              aria-labelledby="edit-student"
              {...other}
            >
              <ValidatorForm
                ref="form"
                onSubmit={e => {
                  e.preventDefault();
                  editStudent({
                    variables: { data: { name: this.state.name } }
                  });
                  this.resetTextField();
                  this.handleClose();
                }}
                onError={errors => console.log(errors)}
              >
                <DialogContent>
                  <DialogTitle id="edit-student">Edit Student</DialogTitle>
                  <DialogContentText id="alert-dialog-description">
                    Edit this student. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                  </DialogContentText>
                  <TextValidator
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    label="Name"
                    onChange={this.handleChange("name")}
                    name="Name"
                    value={this.state.name}
                    validators={["required"]}
                    errorMessages={["This field is required."]}
                  />
                  <DialogActions>
                    <Button onClick={this.handleClose}>Cancel</Button>
                    <Button type="submit" color="primary">
                      Save
                    </Button>
                  </DialogActions>
                </DialogContent>
              </ValidatorForm>
            </Dialog>
          </div>
        )}
      </Mutation>
    );
  }
}

// export main with material-ui styles
export default withRoot(withStyles(styles)(EditStudentDialog));
