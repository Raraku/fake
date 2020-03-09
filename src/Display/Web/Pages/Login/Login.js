//Rest Auth Api
import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions/auth";
import { Form, FormControl, Button } from "react-bootstrap";
import { Paper } from "@material-ui/core";
import { Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

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
      password: event.target.value
    });
    console.log(this.state);
  };
  render() {
    return (
      <Paper className="p-4">
        <Helmet>
          <title>Login</title>
          <meta
            name="description"
            content="Login to access your stored manga data"
          />
        </Helmet>
        <Divider horizontal>
          <h3>Login</h3>
        </Divider>
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
          </Button>{" "}
          <Link to="/signup/">
            <h5 className="d-inline-block">or Signup...</h5>
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
    onAuth: (username, password) =>
      dispatch(actions.authLogin(username, password))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
