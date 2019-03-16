// other
import React from "react";

// apollo
import gql from "graphql-tag";
import { Query, Mutation } from "react-apollo";

// material-ui
import withRoot from "../withRoot";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

// create material-ui styles init with theme
const styles = theme => ({
  root: {}
});

const GET_ALL_STUDENTS = gql`
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
    }
  }
`;

// main class
class Students extends React.Component {
  // render main
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Mutation mutation={DELETE_STUDENT}>
          {(deleteStudent, { data }) => (
            <Query query={GET_ALL_STUDENTS}>
              {({ loading, error, data }) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;
                return (
                  <div>
                    {data.students.map(student => (
                      <Typography key={student.id} variant="body1" gutterBottom>
                        {student.name} - {student.id}{" "}
                        <Button
                          onClick={() =>
                            deleteStudent({
                              variables: { id: student.id }
                            })
                          }
                        >
                          Delete
                        </Button>
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
