import React from "react";
import axios from "axios";
import { Button, Navbar, Nav } from "react-bootstrap";
import { connect } from "react-redux";

class Viewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [1, 2, 3, 4],
      chapterno: 1,
      loading: true
    };
  }
  componentDidMount() {
    this.fetchChapter();
  }
  fetchChapter() {
    axios
      .get(
        `http://localhost:8000/manga/one-piece/get_chapter/?number=${this.state.chapterno}`
      )
      .then((res) => {
        this.setState({ images: res.data[0].pages.reverse(), loading: false });
        console.log(res.data[0].pages[0]);
        document.title = `one-piece - Chapter ${res.data[0].number}: ${res.data[0].title}`;
      });
    this.forceUpdate();
  }
  handlecounterincrease = () => {
    this.setState(
      (prevState, { chapterno }) => ({
        chapterno: prevState.chapterno + 1
      }),
      () => {
        this.fetchChapter();
        this.forceUpdate();
      }
    );
  };
  handlecounterdecrease = () => {
    this.setState((prevState, { chapterno }) => ({
      chapterno: prevState.chapterno - 1
    }));
    this.fetchChapter();
  };
  render() {
    console.log(this.props.alias);
    return (
      <React.Fragment>
        <Navbar bg="warning" variant="light" fixed="top">
          <Navbar.Brand>
            <div className="chapter-page-container">
              <div className="chapter-page">{this.state.chapterno}</div>
              <Button
                onClick={this.handlecounterincrease}
                variant="outline-secondary"
              >
                +
              </Button>
              <Button
                onClick={this.handlecounterdecrease}
                variant="outline-secondary"
              >
                -
              </Button>
            </div>
          </Navbar.Brand>

          {this.props.alias && (
            <Nav className="ml-auto">
              <Nav.Item className="mr-3">
                <h3>
                  {this.props.alias}
                  {"   "}
                </h3>
              </Nav.Item>
              <Nav.Item>
                <h3>{this.props.time}</h3>
              </Nav.Item>
            </Nav>
          )}
        </Navbar>
        <div style={{ marginTop: "100px" }} className="image-container">
          {this.state.images.map((number) => (
            <div key={number[0]}>
              <img
                width={number[2]}
                height={number[3]}
                srcSet={`https://cdn.mangaeden.com/mangasimg/600x/${number[1]} 600w, https://cdn.mangaeden.com/mangasimg/${number[1]} 800w`}
                referrerPolicy="no-referrer"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://static.mangaeden.com/mangasimg/${number[1]}`;
                }}
              />
              />
              <br />
              <br />
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    alias: state.auth.manga[0].alias,
    time: state.auth.manga[0].last_read
  };
};

export default connect(mapStateToProps)(Viewer);
