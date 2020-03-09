import React from "react";
import { GetMangasInfo } from "./../../../HOC/manga/Mangainfo";
import { Paper } from "@material-ui/core";
import { Row, Col, CardDeck } from "react-bootstrap";
import MangaIcon from "./../components/MangaCards/LastUpdatedManga";
import { Loader, Segment } from "semantic-ui-react";

const Latest = (props) => {
  return (
    <Paper className="recent-paper">
      <div>
        <Row>
          <Col>
            <h3>Latest Updates</h3>
          </Col>
          <Col>
            <h4 className="text-right">See more...</h4>
          </Col>
        </Row>
      </div>

      {!props.loading ? (
        <Row>
          {props.manga.slice(0, 6).map((manga) => (
            <MangaIcon
              title={manga.title}
              loading={props.loading}
              rank={manga.rank}
              author={manga.author}
              alias={manga.alias}
              last_updated={manga.last_chapter_date}
              image_url={manga.image_url}
            />
          ))}
        </Row>
      ) : (
        <Segment>
          <div style={{ height: "200px" }}>
            <Loader active size="big">
              Loading...
            </Loader>
          </div>
        </Segment>
      )}
    </Paper>
  );
};

export default GetMangasInfo(Latest);
