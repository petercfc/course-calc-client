import React from "react";
import Button from "@material-ui/core/Button";
import { graphql } from "gatsby";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";
import List from "../components/list";

const styles = theme => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing(20)
  }
});

function About(props) {
  const { classes, data } = props;
  console.log(data);

  return (
    <div className={classes.root}>
      <Typography variant="h4" component="h1" gutterBottom>
        Courses
      </Typography>
      <List data={data} />
    </div>
  );
}

export default withStyles(styles)(About);

export const query = graphql`
  query {
    prisma {
      routeCollection {
        items {
          sys {
            id
          }
          name
        }
      }
    }
  }
`;
