import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./store/actions/auth";
import Web from "./Display/Web/Web";

class Switcher extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
    this.props.onTryGetManga();
  }

  render() {
    return <Web />;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
    onTryGetManga: () => dispatch(actions.getManga())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Switcher);
