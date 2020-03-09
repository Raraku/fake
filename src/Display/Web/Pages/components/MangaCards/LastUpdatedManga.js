import React, { useState, useEffect } from "react";
import { Card, Col, Table } from "react-bootstrap";
import axios from "axios";
import { Image, Placeholder } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";

function LastReadMangaIcon(props) {
  const [errored, setErrored] = useState(true);
  const [show, setShow] = useState(false);
  const [chapters, setChapters] = useState([]);
  const color = {
    Kami: "green",
    S: "yellow",
    A: "teal",
    B: "brown"
  };

  useEffect(() => {
    axios.get(`/manga/${props.alias}/get_recent_chapters/`).then((res) => {
      setChapters(res.data);
    });
  }, [show]);

  return (
    <Col className="manga-card" xs={6}>
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
                <Card.Text>
                  <Table striped size="sm">
                    <thead>
                      <tr>
                        <th>Chapter title</th>
                      </tr>
                    </thead>
                    <tbody>
                      {chapters.map((chapter) => (
                        <tr>
                          <td>{chapter.title}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card.Text>
                <Badge variant="danger">{props.rank}</Badge>
                <Card.Subtitle className="text-muted">
                  {props.author}
                </Card.Subtitle>
                {props.last_updated && (
                  <footer className="blockquote-footer">
                    {" "}
                    last read {props.last_updated}
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
export default LastReadMangaIcon;
