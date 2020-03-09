import React from "react";

import {
  Container,
  Navbar,
  Row,
  Col,
  Form,
  Nav,
  Button
} from "react-bootstrap";
import Sidebar from "./Left";
import SearchBar from "./../Pages/Search/Searchbar";
import { withRouter, Link } from "react-router-dom";
import MangaSearch from "./../Pages/Search/Search";
import { Divider } from "semantic-ui-react";
import { connect } from "react-redux";
import * as actions from "./../../../store/actions/auth";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reload: false,
      search: false,
      value: ""
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.location.key !== this.props.location.key) {
      this.setState({ reload: !this.state.reload });
      console.log("changed");
      this.forceUpdate();
    }
  }
  changeSearchStatus = () => {
    this.setState({ search: !this.state.search });
  };
  handleChange = (event) => {
    this.setState({ value: event.target.value });
    this.setState({ search: true });
    if (event.target.value == "") {
      this.changeSearchStatus();
    }
  };
  logout = () => {
    this.props.logout();
    this.props.history.push("/login/");
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <Navbar variant="dark" className="mynav">
          <Container>
            <Navbar.Brand as={Link} to="/">
              Elitemanga
            </Navbar.Brand>
            <Form.Control
              style={{ marginRight: "0.5em" }}
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            ></Form.Control>
            <Button variant="outline-primary" type="Submit">
              Search
            </Button>

            {this.props.isAuthenticated ? (
              <Nav>
                <Nav.Link onClick={this.logout}>Logout</Nav.Link>
              </Nav>
            ) : (
              <Nav>
                <Nav.Link as={Link} to="/login/">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup/">
                  Signup
                </Nav.Link>
              </Nav>
            )}
          </Container>
        </Navbar>
        <Row noGutters>
          <Col xs={1}>
            <Sidebar />
          </Col>
          <Col xs={10}>
            <Container
              style={{
                paddingTop: "1em",
                height: "700px"
              }}
            >
              {this.state.search ? (
                <MangaSearch params={this.state.value} />
              ) : (
                this.props.children
              )}
            </Container>
          </Col>
        </Row>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token != null
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Layout));
