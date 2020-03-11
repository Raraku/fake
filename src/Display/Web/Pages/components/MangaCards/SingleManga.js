import React, { useState, useEffect } from "react";
import { Card, Col, Badge } from "react-bootstrap";
import ImageIcon from "@material-ui/icons/Image";
import he from "he";
import { Button, Divider, Image, Placeholder } from "semantic-ui-react";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

function MangaIcon(props) {
  const [errored, setErrored] = useState(true);
  const [show, setShow] = useState(false);
  const color = {
    Kami: "green",
    S: "yellow",
    A: "teal",
    B: "brown"
  };
  const add_to_favorites = () => {
    props.add_to_favorites();
  };
  console.log(props.is_favorite);
  return (
    <Col className="manga-card-single" xs={12} lg={props.col_size}>
      <Card className="special-card" style={{ flexDirection: "row" }}>
        <div className="w-25 my-div">
          <div style={{ height: "100%" }}>
            <Image
              fluid
              label={{
                as: "a",
                color: color[props.rank],
                content: `${props.rank}`,
                ribbon: true
              }}
              hidden={show}
              src={props.image_url}
              style={{ width: "100%" }}
              alt="manga-image"
              referrerPolicy="no-referrer"
              loading="lazy"
              onError={(setErrored) => {
                setShow(true);
              }}
              onLoad={() => {
                setErrored(false);
              }}
            />
            {errored && (
              <Placeholder style={{ height: "100%", width: "100%" }}>
                <Placeholder.Image rectangular />
              </Placeholder>
            )}
          </div>
        </div>
        <Card className="special-card" className="w-75 my-div">
          <Card.Body>
            <Card.Title>
              {props.loading ? (
                <Placeholder>
                  <Placeholder.Line />
                </Placeholder>
              ) : (
                <h3>{props.title}</h3>
              )}
            </Card.Title>
            {props.loading ? (
              <Placeholder>
                <Placeholder.Line />
                <Placeholder.Paragraph>
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Paragraph>
              </Placeholder>
            ) : (
              <div>
                <Badge variant="danger">{props.rank}</Badge>
                <Card.Text>{he.decode(props.description)}</Card.Text>
                {props.is_favorite != undefined && (
                  <div className="text-right">
                    {props.is_favorite ? (
                      <BookmarkIcon
                        onClick={add_to_favorites}
                        fontSize="large"
                      />
                    ) : (
                      <BookmarkBorderIcon
                        onClick={add_to_favorites}
                        fontSize="large"
                      />
                    )}
                  </div>
                )}
                <Card.Subtitle className="text-muted">
                  {props.author}
                </Card.Subtitle>
                {props.last_read && (
                  <footer className="blockquote-footer">
                    {" "}
                    last read {props.last_read}
                  </footer>
                )}
              </div>
            )}
          </Card.Body>
        </Card>
      </Card>
    </Col>
  );
}
export default MangaIcon;

MangaIcon.defaultProps = {
  col_size: 6,
  last_read: false
};
