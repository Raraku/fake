import React from "react";
import { GetMangasInfo } from "./../../../HOC/manga/Mangainfo";
import { Paper } from "@material-ui/core";
import { Row, Button, Col, Card } from "react-bootstrap";
import MangaIcon from "./../components/MangaCards/LastUpdatedManga";
import {
  Divider,
  Segment,
  Loader,
  Header,
  Icon,
  CardGroup,
  Item,
} from "semantic-ui-react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PlaceholderItem from "./../components/Placeholders/PlaceholderItem";

const Lists = (props) => {
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("/lists/get_recent_lists").then((res) => {
      setLists(res.data);
      setLoading(false);
    });
  }, []);
  return (
    <Card>
      <Card.Header>
        <Divider horizontal>
          <Header className="need-theme" as="h4">
            <Icon name="rss" />
            Trending Lists
          </Header>
        </Divider>
      </Card.Header>
      <Card.Body>
        <div>
          <Item.Group unstackable divided>
            {!loading
              ? lists.map((list) => (
                  <Item as={Link} to={`/lists/${list.slug}`} className="f-list">
                    <Item.Image size="tiny" src={list.image} />
                    <Item.Content>
                      <Item.Header className="list-header" as="a">
                        {list.title}
                      </Item.Header>
                    </Item.Content>
                  </Item>
                ))
              : [...Array(6)].map((e, i) => <PlaceholderItem />)}
          </Item.Group>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Lists;
