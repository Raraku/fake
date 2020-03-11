import React, { useState, useEffect } from "react";
import axios from "axios";
import { Paper } from "@material-ui/core";
import { Navbar, Button, Nav } from "react-bootstrap";
import { Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Modal } from "react-bootstrap";

const Viewer = (props) => {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState(null);
  const [number, setNumber] = useState(null);
  const [lastChapter, setLastChapter] = useState(false);
  const [allChapters, setAllChapters] = useState([]);
  const getMangaChapters = () => {
    return axios.get(
      `/manga/${props.match.params.manga}/get_manganelo_chapter/`,
      {
        params: {
          number: props.match.params.chapter
        }
      }
    );
  };

  const getChapterPages = () => {
    return axios.get(
      `/manga/${props.match.params.manga}/get_manganelo_chapters/`
    );
  };
  useEffect(() => {
    setPages([]);
    axios.all([getMangaChapters(), getChapterPages()]).then(
      axios.spread(function(Pages, Chapters) {
        setPages(Pages.data[0].pages);
        setNumber(Pages.data[0].number);
        setTitle(Pages.data[0].title);
        setLoading(false);

        console.log(Pages.data[0].pages[0]);
        document.title = `${props.match.params.manga} - Chapter ${Pages.data[0].number}: ${Pages.data[0].title}`;
        setAllChapters(Chapters.data);

        setLoading(false);
      })
    );
  }, [props.location.key]);

  const handlecounterincrease = () => {
    if (props.match.params.chapter == allChapters[0].number) {
      setLastChapter(true);
      return null;
    } else {
      let currentChapter =
        allChapters.findIndex((array) => {
          if (array.number == props.match.params.chapter) {
            return true;
          } else {
            return false;
          }
        }) - 1;
      console.log(currentChapter);
      props.history.push(
        `/manga/${props.match.params.manga}/${allChapters[currentChapter].number}/`
      );
    }
  };
  const handlecounterdecrease = () => {
    let currentChapter =
      allChapters.findIndex((array) => {
        if (array.number == props.match.params.chapter) {
          return true;
        } else {
          return false;
        }
      }) + 1;
    setLastChapter(false);
    if (currentChapter == allChapters.length) {
      console.log("end");
      return null;
    } else {
      props.history.push(
        `/manga/${props.match.params.manga}/${allChapters[currentChapter].number}/`
      );
    }
  };
  if (pages != []) {
    return (
      <React.Fragment>
        <Helmet>
          <title>
            {props.match.params.manga}{" "}
            {title != null
              ? `Chapter ${number} : ${title}`
              : `Chapter ${number}`}
          </title>
          <meta
            name="description"
            content={`${props.match.params.manga}
            ${
              title != null
                ? `Chapter ${number} : ${title}`
                : `Chapter ${number}`
            }`}
          />
        </Helmet>
        <Modal className="manga-modal" show={true}>
          <Navbar
            show
            bg="dark"
            variant="dark"
            className="text-center"
            expand={false}
            fixed="top"
          >
            <Dropdown
              className="text-center"
              pointing
              loading={loading}
              selection
              fluid
              text={
                title != null
                  ? `Chapter ${number} : ${title}`
                  : `Chapter ${number}`
              }
            >
              <Dropdown.Menu>
                {allChapters.map((chapter) => (
                  <Dropdown.Item
                    className="text-center"
                    key={chapter.number}
                    as={Link}
                    to={`/manga/${props.match.params.manga}/${chapter.number}/`}
                    active={chapter.number == number}
                    text={
                      chapter.title != null
                        ? `Chapter ${chapter.number} : ${chapter.title}`
                        : `Chapter ${chapter.number}`
                    }
                  />
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <br />
          </Navbar>

          <div style={{ marginTop: "100px" }} className="image-container">
            {pages.map((number) => (
              <div>
                <div className="text-center">
                  <img
                    style={{ marginLeft: "auto", marginRight: "auto" }}
                    width="80%"
                    src={number}
                    className="manga-display"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                    }}
                  />
                  <br />
                  <br />
                </div>
              </div>
            ))}
            <div className="chapter-page-container">
              <Nav.Item
                className="text-white text-center"
                hidden={!lastChapter}
              >
                Oops, last chapter. Stay tuned, we'll inform you when the next
                chapter is released
              </Nav.Item>
            </div>
            <div className="chapter-page-container">
              <Button
                onClick={handlecounterdecrease}
                variant="outline-secondary"
              >
                -
              </Button>
              <Button
                onClick={handlecounterincrease}
                variant="outline-secondary"
              >
                +
              </Button>
              <br />
              <br />
            </div>
          </div>
        </Modal>
      </React.Fragment>
    );
  } else {
    return (
      <div
        style={{
          textAlign: "center",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Paper style={{ width: "0.8vw", height: "0.9vh" }}>loading...</Paper>
      </div>
    );
  }
};
export default Viewer;
