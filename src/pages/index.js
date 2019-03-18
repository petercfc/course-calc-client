import React from "react";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../withRoot";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import loadable from "@loadable/component";

const Courses = loadable(() => import("./courses"));
const Calculator = loadable(() => import("./calculator"));

const styles = theme => ({
  root: {}
});

class Index extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Router>
        <div className={classes.root}>
          <nav>
            <ul>
              <li>
                <Link to="/">Calculator</Link>
              </li>
              <li>
                <Link to="/courses/">Courses</Link>
              </li>
            </ul>
          </nav>
          <Route path="/" exact component={Calculator} />
          <Route path="/courses/" component={Courses} />
        </div>
      </Router>
    );
  }
}

export default withRoot(withStyles(styles)(Index));
