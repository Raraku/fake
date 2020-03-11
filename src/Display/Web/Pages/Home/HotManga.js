import React from "react";
import axios from "axios";
import { Paper } from "@material-ui/core";
import { Row, Col } from "react-bootstrap";
import MangaIcon from "./../components/MangaCards/LastReadIcon";
import { Loader, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

class HotManga extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      manga: [],
      loading: true
    };
  }
  componentDidMount() {
    axios.get("/mangainfo/").then((res) => {
      this.setState({ manga: res.data, loading: false });
    });
  }
  render() {
    return (
      <Paper className="recent-paper">
        <div>
          <Row>
            <Col>
              <h3>Hot Manga</h3>
            </Col>
            <Col>
              <h4 className="text-right">
                <Link to="/hot-manga/">See more...</Link>
              </h4>
            </Col>
          </Row>
        </div>

        {!this.state.loading ? (
          <Row>
            {this.state.manga.slice(0, 15).map((manga) => (
              <MangaIcon
                col_size={6}
                title={manga.title}
                loading={this.state.loading}
                author={manga.author}
                alias={manga.alias}
                rank={manga.rank}
                last_updated={manga.last_updated}
                image_url={manga.image_url}
                description={manga.description}
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
  }
}
export default HotManga;
