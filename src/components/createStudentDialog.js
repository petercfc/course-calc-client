// other
import React from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

// apollo
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { GET_ALL_STUDENTS } from "./students";

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
const CREATE_STUDENT = gql`
  mutation createStudent($data: StudentCreateInput!) {
    createStudent(data: $data) {
      id
      name
    }
  }
`;

// main class
class CreateStudentDialog extends React.Component {
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
      <Mutation
        mutation={CREATE_STUDENT}
        variables={{ data: { name: this.state.name } }}
        update={(cache, { data: { createStudent } }) => {
          const { students } = cache.readQuery({ query: GET_ALL_STUDENTS });
          cache.writeQuery({
            query: GET_ALL_STUDENTS,
            data: { students: students.concat([createStudent]) }
          });
          const one = cache.readFragment({
            id: "Student:cjtc3m6nf0ubp0b51z13hdy03",
            fragment: gql`
              fragment myTodo on Student {
                id
                name
              }
            `,
            data: {
              name: "OWOWOWOWO"
            }
          });
          console.log(one);
        }}
      >
        {(createStudent, { data }) => (
          <div className={classes.root}>
            <Dialog
              onClose={this.handleClose}
              aria-labelledby="create-student"
              {...other}
            >
              <ValidatorForm
                ref="form"
                onSubmit={e => {
                  e.preventDefault();
                  createStudent();
                  this.resetTextField();
                  this.handleClose();
                }}
                onError={errors => console.log(errors)}
              >
                <DialogContent>
                  <DialogTitle id="create-student">Create Student</DialogTitle>
                  <DialogContentText id="alert-dialog-description">
                    Create a new student. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
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
                      Create
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
export default withRoot(withStyles(styles)(CreateStudentDialog));
