import React from "react";
import axios from "axios";
<<<<<<< HEAD
import { Row, Col, Button, Card } from "react-bootstrap";
import MangaIcon from "./../components/MangaCards/LastReadIcon";
import PlaceholderCard from "./../components/Placeholders/PlaceholderCard";
import {
  Loader,
  Segment,
  Divider,
  Header,
  Icon,
  CardGroup,
} from "semantic-ui-react";
=======
import { Paper } from "@material-ui/core";
import { Row, Col, Button } from "react-bootstrap";
import MangaIcon from "./../components/MangaCards/LastReadIcon";
import { Loader, Segment, Divider } from "semantic-ui-react";
>>>>>>> 35e33dc266005d3a7da23457341ded5c978e44fb
import { Link } from "react-router-dom";

class HotManga extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      manga: [],
      loading: true,
    };
  }
  componentDidMount() {
    axios.get("/mangainfo/get_weekly_manga/").then((res) => {
      this.setState({ manga: res.data, loading: false });
    });
  }
  render() {
    return (
<<<<<<< HEAD
      <Card>
        <Card.Header className="landing">
          <Divider horizontal>
            <Header className="need-theme" as="h3">
              <Icon name="trophy" />
              Trending Manga this week
            </Header>
          </Divider>
        </Card.Header>
        <Card.Body className="landing-card">
          <div>
            <CardGroup itemsPerRow={6}>
              {!this.state.loading
                ? this.state.manga.map((manga) => (
                    <MangaIcon
                      title={manga.title}
                      loading={this.state.loading}
                      author={manga.author}
                      alias={manga.alias}
                      rank={manga.rank}
                      last_updated={manga.last_updated}
                      image_url={manga.image_url}
                      description={manga.description}
                      media_type={manga.media_type}
                    />
                  ))
                : [0, 1, 2, 3, 4, 5].map((e, i) => <PlaceholderCard />)}
            </CardGroup>
          </div>
        </Card.Body>
      </Card>
=======
      <Paper className="recent-paper">
        <div>
          <Divider horizontal>
            <h3>Hot Manga</h3>
          </Divider>
        </div>
        {!this.state.loading ? (
          <div>
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
            <div className="text-right">
              <Button as={Link} to="/hot-manga/" variant="outline-success">
                See more
              </Button>
            </div>
          </div>
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
>>>>>>> 35e33dc266005d3a7da23457341ded5c978e44fb
    );
  }
}
export default HotManga;
