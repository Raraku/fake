import React, { useState } from "react";
import axiosConfig from "../axiosConfig";

const getFavorites = (WrappedComponent, props) => {
  class GetFavorites extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        favorites: [],
        loading: true,
        error: ""
      };
    }
    componentDidMount() {
      console.log(this.props);
      axiosConfig
        .get(`/usermanga/get_favorites/`)
        .then((res) => {
          this.setState({ favorites: res.data, loading: false });
          console.log(res.data);
        })
        .catch((err) => {
          this.setState({ error: "Log in to view Favorites", loading: false });
        });
    }
    render() {
      return (
        <WrappedComponent
          favorites={this.state.favorites}
          loading={this.state.loading}
          err={this.state.error}
          {...this.props}
        />
      );
    }
  }
  return GetFavorites;
};
export default getFavorites;
