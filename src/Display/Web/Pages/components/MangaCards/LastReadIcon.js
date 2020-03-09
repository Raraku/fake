import React, { useState } from "react";
import { Card, Col } from "react-bootstrap";
import he from "he";
import { Placeholder, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

function MangaIcon(props) {
  const [errored, setErrored] = useState(true);
  const [show, setShow] = useState(false);
  const color = {
    Kami: "green",
    S: "yellow",
    A: "teal",
    B: "brown"
  };
  return (
    <Col className="manga-card" xs={props.col_size}>
      <Card
        as={Link}
        to={`/manga/${props.alias}/`}
        style={{ flexDirection: "row" }}
      >
        <div className="w-25">
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
              style={{ width: "100%" }}
              src={props.image_url}
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
        <Card className="w-75">
          <Card.Body>
            <Card.Title>
              {props.loading ? (
                <Placeholder>
                  <Placeholder.Line />
                </Placeholder>
              ) : (
                <div>{props.title}</div>
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
                <Card.Text className="mycard-description">
                  Description: {he.decode(props.description)}
                </Card.Text>

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
