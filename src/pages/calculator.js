import React from "react";
import Button from "@material-ui/core/Button";
import { graphql } from "gatsby";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";
import List from "../components/list";

const styles = theme => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing(20),
    listStyleType: "none"
  }
});

function Calculator(props) {
  const { classes, data } = props;
  console.log(data);

  return (
    <div className={classes.root}>
      <List data={data} />
    </div>
  );
}

export default withStyles(styles)(Calculator);

export const query = graphql`
  query {
    prisma {
      courses {
        name
        id
      }
    }
  }
`;
