import React, { useState } from "react";
import axiosConfig from "../axiosConfig";

const getFavorites = (WrappedComponent, props) => {
  class GetFavorites extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        favorites: [],
        loading: true
      };
    }
    componentDidMount() {
      console.log(this.props);
      axiosConfig.get(`/usermanga/get_favorites/`).then((res) => {
        this.setState({ favorites: res.data, loading: false });
        console.log(res.data);
      });
    }
    render() {
      return (
        <WrappedComponent
          favorites={this.state.favorites}
          loading={this.state.loading}
          {...this.props}
        />
      );
    }
  }
  return GetFavorites;
};
export default getFavorites;
