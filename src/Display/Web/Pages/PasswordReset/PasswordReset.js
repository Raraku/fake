//Rest-Auth Password reset.
import React from "react";
import { Paper } from "@material-ui/core";
import { Divider } from "semantic-ui-react";
import { InputGroup, Form, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";

class PasswordReset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPassword: "",
      passcode: "",
      stage: 1,
      email: ""
    };
  }
  Passwordreset = () => {
    if (this.state.stage === 3) {
      return (
        <div>
          Reset your Password
          <Form>
            <InputGroup>
              <Form.Control type="text"></Form.Control>
              <Button type="submit">Submit new password</Button>
            </InputGroup>
          </Form>
        </div>
      );
    } else if (this.state.stage === 2) {
      return (
        <div>
          <Helmet>
            <title>Elitemanga - Contact us</title>
            <meta name="description">
              Contact Us- We are always willing to hear from you.
            </meta>
          </Helmet>
          <div>
            Enter the passcode we sent to the email: <b>{this.state.email}</b>
          </div>
          <Form>
            <InputGroup>
              <Form.Control type="text"></Form.Control>
              <Button type="submit">Submit passcpde</Button>
            </InputGroup>
          </Form>
        </div>
      );
    } else {
      return (
        <div>
          Enter your email: If this email exists on our server, we will send it
          a mail with a passcode
          <Form>
            <InputGroup>
              <Form.Control type="text"></Form.Control>
              <Button type="submit">Submit email</Button>
            </InputGroup>
          </Form>
        </div>
      );
    }
  };
  render() {
    return (
      <Paper>
        <Helmet>
          <title>Elitemanga - PasswordReset</title>
          <meta name="description" content="Reset your password" />
        </Helmet>
        <Divider>Password Reset</Divider>
        <PasswordReset />
      </Paper>
    );
  }
}
export default PasswordReset;
