// other
import React from "react";
import ReactDOM from "react-dom";

// apollo
import { Query } from "react-apollo";
import gql from "graphql-tag";

// material-ui
import withRoot from "../withRoot";
import { withStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

//components
import CreateStudentDialog from "./createStudentDialog";

// create material-ui styles init with theme
const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 220
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

// main class
class SelectStudentInput extends React.Component {
  // init state
  state = {
    name: "",
    id: "",
    labelWidth: 0
  };

  handleChange = event => {
    console.log(event.target.name);
    console.log(event.target.value);
    console.log(this.state);
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
    });
  }

  // render main
  render() {
    const { classes } = this.props;
    return (
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
            <div className={classes.root}>
              <form className={classes.root} autoComplete="off">
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel
                    placeholder="Select Student"
                    ref={ref => {
                      this.InputLabelRef = ref;
                    }}
                    htmlFor="student"
                  >
                    Select Student
                  </InputLabel>
                  <Select
                    value={this.state.name}
                    onChange={this.handleChange}
                    input={
                      <OutlinedInput
                        labelWidth={this.state.labelWidth}
                        name="name"
                        id="student"
                      />
                    }
                  >
                    {data.students.map(student => (
                      <MenuItem value={student.id}>{student.name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </form>
            </div>
          );
        }}
      </Query>
    );
  }
}

// export main with material-ui styles
export default withRoot(withStyles(styles)(SelectStudentInput));
