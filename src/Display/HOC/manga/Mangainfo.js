import React, { useState, useEffect } from "react";
import axios from "axios";

export const GetMangasInfo = (WrappedComponent, props) => {
  class GetMangaInfo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        manga: [],
        loading: true,
        count: null,
        page: 1,
        type: this.props.type,
      };
    }
    getData = (page, type, tags = []) => {
      if (this.state.type != type) {
        this.setState({ type: type });
      }
      var link = null;
      console.log(type);
      switch (type) {
        case 0:
          link = "/mangainfo/";
          break;
        case 1:
          link = "/animeinfo/";
          break;
        case 2:
          link = "/mixedinfo/";
          break;
        default:
          link = "/mixedinfo/";
      }
      if (tags.length > 0) {
        link = link + "filter_by_tags/";
      }
      console.log(link);
      axios
        .get(link, {
          params: { page: page, page_size: this.props.page_size, tags: tags },
        })
        .then((res) => {
          this.setState({
            manga: res.data.results,
            count: res.data.count,
            loading: false,
            page: page,
          });
          console.log(this.state.manga);
        });
    };

    componentDidMount() {
      this.getData(this.state.page, this.state.type);
      console.log(this.state.type);
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
      this.getData(page, this.state.type);
    };
    render() {
      console.log(this.state.type);
      return (
        <WrappedComponent
          loading={this.state.loading}
          manga={this.state.manga}
          count={this.state.count}
          page={this.state.page}
          setPage={this.setPage}
          changeMedia={this.getData}
          type={this.state.type}
          {...props}
        />
      );
    }
  }
  GetMangaInfo.defaultProps = {
    type: 0,
    page_size: 24,
  };
  return GetMangaInfo;
};
