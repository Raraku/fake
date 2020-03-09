import React from "react";
import WebLayout from "./Layout/Layout";
import WebRouter from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import Search from "./Pages/Search/Search";

class Web extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switch: 0
    };
  }
  changeSwitchA = () => {
    this.setState({ switch: 1 });
  };
  changeSwitchB = () => {
    this.setState({ switch: 0 });
  };

  render() {
    if (this.state.switch === 0) {
      return (
        <div>
          <Router>
            <WebLayout>
              <WebRouter changeLoading={this.changeLoading} />
            </WebLayout>
          </Router>
        </div>
      );
    } else if (this.state.switch === 1) {
      return (
        <WebLayout switchSearch={this.changeSwitchB}>
          <Search />
        </WebLayout>
      );
    }
  }
}

export default Web;
