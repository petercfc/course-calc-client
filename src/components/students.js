// other
import React from "react";

// apollo
import gql from "graphql-tag";
import { Query } from "react-apollo";

// material-ui
import withRoot from "../withRoot";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import selectStudent from "./selectStudent";

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

// main class
class Students extends React.Component {
  // render main
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Query query={GET_ALL_STUDENTS}>
          {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
            return (
              <div>
                {data.students.map(student => (
                  <Typography key={student.id} variant="body1" gutterBottom>
                    {student.name} - {student.id}
                  </Typography>
                ))}
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

// export main with material-ui styles
export default withRoot(withStyles(styles)(Students));
