import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import withRoot from "../withRoot";
import List from "../components/list";

const styles = theme => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing(20),
    listStyleType: "none"
  }
});

class Courses extends React.Component {
  state = {
    open: false,
    selectedValue: "null"
  };

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = value => {
    this.setState({ selectedValue: value, open: false });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="h4" gutterBottom>
          List of Courses
        </Typography>
        <br />
        <Query
          query={gql`
            {
              courses {
                name
                id
              }
            }
          `}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            return <List data={data} />;
          }}
        </Query>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(Courses));
