import React, { useState, useEffect } from "react";
import { Card, Col, Row, Button, CardColumns, CardDeck } from "react-bootstrap";
import { Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Divider,
  Header,
  Icon,
  Segment,
  Loader,
  Item,
  CardGroup,
} from "semantic-ui-react";
import SideCard from "./../components/MangaCards/sidebarCard/SideCard";
import MangaIcon from "./../components/MangaCards/LastReadIcon";
import PlaceholderCard from "./../components/Placeholders/PlaceholderCard";
import PlaceholderItem from "./../components/Placeholders/PlaceholderItem";

function Unreleased(props) {
  const [manga, setManga] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(props);
  useEffect(() => {
    axios.get("/animeinfo/get_unreleased_anime/").then((res) => {
      setManga(res.data);
      setLoading(false);
    });
  }, []);
  return (
    <Card>
      <Card.Header>
        <Divider horizontal>
          <Header className="need-theme" as="h5">
            <Icon name="rss" />
            Upcoming Anime
          </Header>
        </Divider>
      </Card.Header>
      <Card.Body>
        <Item.Group unstackable className="myitem vanish" divided>
          {!loading
            ? manga.map((manga) => (
                <SideCard
                  title={manga.title}
                  loading={loading}
                  rank={manga.rank}
                  author={manga.author}
                  alias={manga.alias}
                  last_updated={manga.last_updated}
                  image_url={manga.image_url}
                  description={manga.description}
                  media_type={manga.media_type}
                />
              ))
            : [...Array(6)].map((e, i) => <PlaceholderItem />)}
        </Item.Group>
        <CardGroup className="mobile-item mobile" itemsPerRow={2}>
          {!loading
            ? manga.map((manga) => (
                <MangaIcon
                  title={manga.title}
                  loading={loading}
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
      </Card.Body>
    </Card>
  );
}

export default Unreleased;
