import React, { useState, useEffect } from "react";
import axiosConfig from "./../axiosConfig";

export const GetMangasInfo = (WrappedComponent, props) => {
  class GetMangaInfo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        manga: [],
        loading: true,
        count: null,
        page: 1
      };
    }
    getData = (page) => {
      axiosConfig
        .get("/mangainfo/", {
          params: { page: page }
        })
        .then((res) => {
          this.setState({
            manga: res.data.results,
            count: res.data.count,
            loading: false
          });
          console.log(this.state.manga);
        });
    };
    componentDidMount() {
      this.getData(this.state.page);
    }

    loadNext = () => {
      this.setState({ loading: true, page: this.state.page + 1 });
    };
    loadPrevious = () => {
      if (this.state.page != 1) {
        this.setState({ loading: true, page: this.state.page - 1 });
      }
    };
    setPage = (page) => {
      this.getData(page);
    };
    render() {
      return (
        <WrappedComponent
          loading={this.state.loading}
          manga={this.state.manga}
          count={this.state.count}
          page={this.state.page}
          setPage={this.setPage}
          {...props}
        />
      );
    }
  }
  return GetMangaInfo;
};
