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

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing(20)
  }
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
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Super Secret Password</DialogTitle>
        <DialogContent>
          <DialogContentText>1-2-3-4-5</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
      <Typography variant="h4" gutterBottom>
        Course Credit Calculator
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        This app will help you determine the remaining credits and classes
        required for graduation. This is based on your currently passed classes.
      </Typography>
      <Button variant="contained" onClick={handleClick}>
        <Link to="/courses">Start Calculator</Link>
      </Button>
    </div>
  );
}

export default Index;
