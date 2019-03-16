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

const GET_SELECTED_STUDENT = gql`
  query selectedStudent {
    selectedStudent @client
  }
`;

// main class
class Student extends React.Component {
  // render main
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Query query={GET_SELECTED_STUDENT}>
          {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
            return (
              <Typography variant="h4" gutterBottom>
                {data.selectedStudent}
              </Typography>
            );
          }}
        </Query>
      </div>
    );
  }
}

// export main with material-ui styles
export default withRoot(withStyles(styles)(Student));
