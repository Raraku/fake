import React, { useState, useEffect } from "react";
import axios from "axios";

export const GetManga = (WrappedComponent, props) => {
  class GetManga extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        manga: [],
        loading: true,
      };
    }
    getManga = () => {
      if (this.props.type == "1") {
        axios.get(`/anime/${this.props.match.params.manga}/`).then((res) => {
          this.setState({ manga: res.data, loading: false });
        });
      } else {
        axios.get(`/manga/${this.props.match.params.manga}/`).then((res) => {
          this.setState({ manga: res.data, loading: false });
        });
      }
    };

    componentDidMount() {
      this.getManga();
    }
    componentDidUpdate(prevProps) {
      if (this.state.manga == []) {
        console.log("work");
        this.getManga();
      }
      if (prevProps.location.key !== this.props.location.key) {
        this.getManga();
        window.scrollTo(0, 0);
      }
    }

    render() {
      console.log(this.props);
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
