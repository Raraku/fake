import React, { useState, useEffect } from "react";
import {
  Comment,
  Header,
  Form,
  Button,
  Segment,
  Icon,
} from "semantic-ui-react";
import debounce from "lodash.debounce";
import Review from "./Reviews";
import { connect } from "react-redux";
import axios from "axios";
import { red } from "@material-ui/core/colors";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import axiosConfig from "./../../../HOC/axiosConfig";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      hasMore: true,
      isLoading: true,
      comments: [],
      review: "",
      originality: "",
      plot: "",
      characters: "",
      quality: "",
      scores: false,
      next: "",
    };
    this.textInput = React.createRef();
  }
  loadMoreComments = () => {
    axiosConfig
      .get(this.state.next)
      .then((res) => {
        this.setState({
          isLoading: false,
          comments: [...this.state.comments, ...res.data.results],
          next: res.data.next,
        });
        this.setState({ hasMore: this.state.comments.length < res.data.count });
        console.log(res.data);
      })
      .catch((err) => {
        this.setState({ error: err.message, isLoading: false });
      });
  };
  loadComments = () => {
    axiosConfig
      .get(`/user-review/get_my_reviews/`)
      .then((res) => {
        this.setState({
          isLoading: false,
          comments: res.data.results,
          next: res.data.next,
        });
        console.log(res.data);
        this.setState({ hasMore: this.state.comments.length < res.data.count });
      })
      .catch((err) => {
        this.setState({ error: err.message, isLoading: false });
      });
  };
  componentDidMount() {
    this.loadComments();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.loadComments();
    }
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  changeScore = (event) => {
    this.setState({ scores: !this.state.scores });
  };

  render() {
    console.log(this.state);
    const { error, hasMore, isLoading, comments } = this.state;
    return (
      <div className="p-3 rev-all">
        <Comment.Group>
          <Header className="chameleon" as="h3" dividing>
            Your Reviews
          </Header>

          {comments.length != 0 ? (
            comments.map((comment) => (
              <Review
                key={comment.id}
                {...comment}
                isAuthenticated={this.props.isAuthenticated}
              />
            ))
          ) : (
            <Segment placeholder>
              <Header icon>
                <Icon name="question circle" />
                No Reviews yet, add one below.
              </Header>
              <Button
                onClick={() => {
                  this.textInput.current.focus();
                }}
                primary
              >
                Post Review
              </Button>
            </Segment>
          )}
        </Comment.Group>

        <br />
        {hasMore && (
          <Button onClick={this.loadMoreComments} attached="bottom">
            Load More
          </Button>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token != null,
  };
};
export default connect(mapStateToProps)(Comments);
