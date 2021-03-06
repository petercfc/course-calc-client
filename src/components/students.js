// other
import React from "react";

// apollo
import gql from "graphql-tag";
import { Query, Mutation } from "react-apollo";

// material-ui
import withRoot from "../withRoot";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { Button, IconButton } from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";

// create material-ui styles init with theme
const styles = theme => ({
  root: {}
});

export const GET_ALL_STUDENTS = gql`
  query getAllStudents {
    students {
      id
      name
    }
  }
`;

const DELETE_STUDENT = gql`
  mutation deleteStudent($id: ID!) {
    deleteStudent(where: { id: $id }) {
      id
      name
    }
  }
`;

// main class
class Students extends React.Component {
  //update cache on delete
  update = (cache, { data: { deleteStudent } }) => {
    const { students } = cache.readQuery({ query: GET_ALL_STUDENTS });
    const compareId = deleteStudent.id;

    const result = students.filter(student => {
      const studentId = student.id;
      return studentId !== compareId;
    });
    console.log("result");
    console.log(result);
    try {
      cache.writeQuery({
        query: GET_ALL_STUDENTS,
        data: {
          students: result
        },
        variables: {
          id: compareId
        }
      });
    } catch (err) {
      console.log(err);
    }
    try {
      cache.data.delete(`Student:${compareId}`);
    } catch (err) {
      console.log(err);
    }
  };
  // render main
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Mutation mutation={DELETE_STUDENT} update={this.update}>
          {(deleteStudent, { data }) => (
            <Query query={GET_ALL_STUDENTS}>
              {({ loading, error, data }) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;
                return (
                  <div>
                    {data.students.map(student => (
                      <Typography key={student.id} variant="body1" gutterBottom>
                        {student.name}
                        <IconButton
                          color="secondary"
                          onClick={() =>
                            deleteStudent({
                              variables: { id: student.id }
                            })
                          }
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Typography>
                    ))}
                  </div>
                );
              }}
            </Query>
          )}
        </Mutation>
      </div>
    );
  }
}

// export main with material-ui styles
export default withRoot(withStyles(styles)(Students));
