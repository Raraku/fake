import React, { useState, useEffect } from "react";
import axios from "axios";

export const GetManga = (WrappedComponent, props) => {
  class GetManga extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        manga: [],
        loading: true
      };
    }
    getManga = () => {
      axios.get(`/manga/${this.props.match.params.manga}/`).then((res) => {
        this.setState({ manga: res.data, loading: false });
        console.log(this.state.manga);
      });
    };
    componentDidMount() {
      this.getManga();
    }
    componentDidUpdate() {
      if (this.state.manga == []) {
        console.log("work");
        this.getManga();
      }
    }

    render() {
      console.log(this.props.match.params.manga);
      return (
        <WrappedComponent
          loading={this.state.loading}
          manga={this.state.manga}
          {...this.props}
        />
      );
    }
  }
  return GetManga;
};
