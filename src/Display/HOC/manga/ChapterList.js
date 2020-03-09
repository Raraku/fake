import React, { useState } from "react";
import axios from "axios";

const getChapters = (WrappedComponent, props) => {
  class GetChapters extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        chapters: [],
        loading: true
      };
    }
    componentDidMount() {
      console.log(this.props);
      axios
        .get(`/manga/${this.props.match.params.manga}/get_chapters/`)
        .then((res) => {
          this.setState({ chapters: res.data, loading: false });
        });
    }
    render() {
      return (
        <WrappedComponent
          loading={this.state.loading}
          chapters={this.state.chapters}
          {...this.props}
        />
      );
    }
  }
  return GetChapters;
};
export default getChapters;
