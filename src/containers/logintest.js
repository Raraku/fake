import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";
import { Form, FormControl, Button } from "react-bootstrap";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handlesubmit = (event) => {
    event.preventDefault();
    this.props.onAuth(this.state.email, this.state.password);
    this.props.history.push("/test/");
  };
  handleChange = (event) => {
    this.setState({
      email: event.target.value
    });
    console.log(this.state);
  };
  handleChangeTwo = (event) => {
    this.setState({
      password: event.target.value
    });
    console.log(this.state);
  };
  render() {
    return (
      <Form>
        <Form.Group controlId="formusername">
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
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={this.state.password}
            onChange={this.handleChangeTwo}
            placeholder="enter your password"
          />
        </Form.Group>
        <Button
          onClick={this.handlesubmit}
          variant="outline-dark"
          type="submit"
        >
          Login
        </Button>
      </Form>
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
    onAuth: (username, password) =>
      dispatch(actions.authLogin(username, password))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
