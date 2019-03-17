import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../withRoot";
import { ApolloConsumer, Query } from "react-apollo";
import gql from "graphql-tag";

import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import blue from "@material-ui/core/colors/blue";

import CreateStudentButton from "../components/createStudentButton";

const styles = theme => ({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600]
  }
});

class SelectStudent extends React.Component {
  handleClose = () => {
    this.props.onClose();
  };
  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <div className={classes.root}>
        <Query
          query={gql`
            {
              students {
                name
                id
              }
            }
          `}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            return (
              <ApolloConsumer>
                {client => (
                  <Dialog
                    onClose={this.handleClose}
                    aria-labelledby="simple-dialog-title"
                    {...other}
                  >
                    <DialogContent>
                      <DialogTitle id="simple-dialog-title">
                        Select Student
                      </DialogTitle>
                    </DialogContent>
                    <div>
                      <List>
                        {data.students.map(student => (
                          <ListItem
                            button
                            onClick={() => {
                              client.writeData({
                                data: { selectedStudent: student.name }
                              });
                              this.handleClose();
                            }}
                            key={student.name}
                          >
                            <ListItemAvatar>
                              <Avatar className={classes.avatar}>
                                <PersonIcon />
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={student.name} />
                          </ListItem>
                        ))}
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar>
                              <AddIcon />
                            </Avatar>
                          </ListItemAvatar>
                          <CreateStudentButton />
                        </ListItem>
                      </List>
                    </div>
                  </Dialog>
                )}
              </ApolloConsumer>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(SelectStudent));
