import React, { useState, useEffect } from "react";
import axiosConfig from "./../axiosConfig";

export const GetUserMangas = (WrappedComponent, props) => {
  class GetUserManga extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        manga: [],
        loading: true
      };
    }
    componentDidMount() {
      axiosConfig.get("/usermanga/").then((res) => {
        this.setState({ manga: res.data, loading: false });
        console.log(this.state.manga);
      });
    }
    render() {
      return (
        <WrappedComponent
          manga={this.state.manga}
          loading={this.state.loading}
          {...this.props}
        />
      );
    }
  }
  return GetUserManga;
};
