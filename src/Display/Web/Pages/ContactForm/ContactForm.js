//Contact Api
import React from "react";
import { Paper } from "@material-ui/core";
import { Button, FormControl, Form, Tabs, Tab } from "react-bootstrap";
import axios from "axios";
import { Helmet } from "react-helmet";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      type: "Rerank"
    };
    this.types = [
      "Rerank",
      "Complaint/Bugs/MissingChapters",
      "Idea for new feature",
      "Other"
    ];
  }
  handleClick = (event) => {
    this.setState({ type: this.types[event.target.value] });
    console.log(this.state.type);
  };
  handleChange = (event) => {
    this.setState({ message: event.target.value });
    console.log(this.state.message);
  };
  handleSubmit = () => {
    axios.post(/contact/, {
      type: this.state.type,
      message: this.state.message
    });
  };
  setType = (key) => {
    this.setState({ type: key });
  };

  render() {
    return (
      <Paper className="p-5 a-paper">
        <Helmet>
          <title>Contact Us - EliteManga</title>
          <meta
            name="description"
            content="Contact Us- We are always willing to hear from you."
          />
        </Helmet>
        <h2 className="text-center">
          We are always willing to hear from you. Please select the type of
          message you wish to send...
        </h2>
        <Tabs
          className="nav-justified"
          defaultActiveKey={this.types[0]}
          style={{ marginBottom: "10px" }}
          activeKey={this.state.type}
          id="contact-us-tab"
          onSelect={(k) => this.setType(k)}
        >
          {this.types.map((value) => (
            <Tab eventKey={value} title={value}>
              <Form className="text-center">
                <Form.Group>
                  <Form.Label htmlFor="contactinput">
                    <h4>{value}</h4>
                  </Form.Label>
                  <FormControl
                    name="contactinput"
                    value={this.state.message}
                    as="textarea"
                    rows="4"
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Button variant="outline-primary">Submit</Button>
              </Form>
            </Tab>
          ))}
        </Tabs>
      </Paper>
    );
  }
}
export default ContactForm;
