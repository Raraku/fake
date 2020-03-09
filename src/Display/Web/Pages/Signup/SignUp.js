//Rest Auth Api
import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions/auth";
import { Form, FormControl, Button } from "react-bootstrap";
import { Paper } from "@material-ui/core";
import { Divider } from "semantic-ui-react";
import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password1: "",
      password2: ""
    };
  }
  handlesubmit = (event) => {
    event.preventDefault();
    this.props.onAuth(
      this.state.username,
      this.state.email,
      this.state.password1,
      this.state.password2
    );
    this.props.history.push("/");
  };
  handleChange = (event) => {
    this.setState({
      email: event.target.value
    });
    console.log(this.state);
  };
  handleChangeTwo = (event) => {
    this.setState({
      password1: event.target.value
    });
    console.log(this.state);
  };
  handleChangeThree = (event) => {
    this.setState({
      username: event.target.value
    });
    console.log(this.state);
  };
  handleChangeFour = (event) => {
    this.setState({
      password2: event.target.value
    });
    console.log(this.state);
  };
  render() {
    return (
      <Paper className="p-4">
        <Helmet>
          <title>Signup</title>
          <meta
            name="description"
            content="Welcome to Elitemanga. Signup to enjoy all features"
          />
        </Helmet>
        <Divider horizontal>
          <h3>Signup</h3>
        </Divider>
        <Form>
          <Form.Group controlId="formusername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              value={this.state.username}
              onChange={this.handleChangeThree}
              type="text"
              placeholder="Enter Username"
            />
          </Form.Group>
          <Form.Group controlId="formemail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="password1">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={this.state.password1}
              onChange={this.handleChangeTwo}
              placeholder="enter your password"
            />
          </Form.Group>
          <Form.Group controlId="password2">
            <Form.Label>Retype Password</Form.Label>
            <Form.Control
              type="password"
              value={this.state.password2}
              onChange={this.handleChangeFour}
              placeholder="Retype your password"
            />
          </Form.Group>
          <Button
            disabled={
              this.state.password1 !== this.state.password2 ||
              this.state.email === "" ||
              this.state.username === ""
            }
            onClick={this.handlesubmit}
            variant="outline-dark"
            type="submit"
          >
            Signup
          </Button>
          <Link to="/login/">
            <h5 className="d-inline-block">or Login</h5>
          </Link>
        </Form>
      </Paper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (username, email, password1, password2) =>
      dispatch(actions.authSignup(username, email, password1, password2))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
