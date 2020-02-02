import React from "react";
import { connect } from "react-redux";
import Datenow from "./rest-tester";

class TestContainer extends React.Component {
  render() {
    return this.props.token != null && <Datenow token={this.props.token} />;
  }
}

const mapStateToProps = (state) => {
  return { token: state.auth.token };
};
export default connect(mapStateToProps)(TestContainer);
