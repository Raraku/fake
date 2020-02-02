import React from "react";
import { connect } from "react-redux";
import { Button, ButtonToolbar } from "react-bootstrap";
import axios from "axios";

class Datenow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedData: {}
    };
  }
  getdate = () => {
    console.log(this.props.token);
    axios.defaults.headers = {
      Authorization: `Token ${this.props.token}`
    };
    axios.get(`http://localhost:8000/ping/one-piece/`).then((res) => {
      this.setState({ savedData: res.data });
    });
  };
  componentDidMount() {
    if (this.props.token != null) {
      this.getdate();
    } else {
    }
  }

  setdate = () => {
    var now = new Date();
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${this.props.token}`
    };
    axios
      .patch("http://localhost:8000/ping/one-piece/", {
        last_read: now
      })
      .then(this.getdate);
  };

  render() {
    return (
      <div style={{ marginTop: "32px" }}>
        <Button variant="outline-secondary" onClick={this.getdate}>
          Get current date
        </Button>
        <Button variant="outline-primary" onClick={this.setdate}>
          Set current date
        </Button>
        <div className="dateviewer">{this.state.savedData["alias"]}</div>
        <div className="dateviewer">{this.state.savedData["last_read"]}</div>
        <div className="dateviewer">
          {this.state.savedData["last_read_chapter"]}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state.auth.token);
  return {
    token: state.auth.token
  };
};
export default connect(mapStateToProps)(Datenow);
