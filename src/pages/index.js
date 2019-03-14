import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import Link from "../components/Link";
import { Helmet } from "react-helmet";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing(20)
  },
  button: { textTransform: "none" }
}));

function Index() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div className={classes.root}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Course Credit Calculator</title>
      </Helmet>
      <Typography variant="h4" gutterBottom>
        Course Credit Calculator
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Calculate the courses and number of credits required to graduate.
      </Typography>
      <Typography gutterBottom />
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        onClick={handleClick}
      >
        <Link color="primary" underline="none" to="/calculator">
          Start Calculator
        </Link>
      </Button>
    </div>
  );
}

export default Index;
