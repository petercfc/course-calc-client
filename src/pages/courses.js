import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";
import Link from "../components/Link";

const styles = theme => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing(20)
  }
});

function Courses(props) {
  const { classes, data } = props;
  return (
    <div className={classes.root}>
      <Typography variant="h4" component="h1" gutterBottom>
        Courses
      </Typography>
      {data.prisma.routeCollection.items.map((item, i) => (
        <Typography key={i} variant="subtitle1" component="h2" gutterBottom>
          {item.name}
        </Typography>
      ))}
    </div>
  );
}

Courses.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Courses);

export const query = graphql`
  query {
    prisma {
      routeCollection {
        items {
          name
        }
      }
    }
  }
`;
