import React, { useState, useEffect } from "react";
import { Card, Col, Row, Button, CardColumns, CardDeck } from "react-bootstrap";
import { Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import axiosConfig from "./../../../HOC/axiosConfig";
import {
  Divider,
  Header,
  Icon,
  Segment,
  Loader,
  CardGroup,
  Item,
} from "semantic-ui-react";
import SideCard from "./../components/MangaCards/sidebarCard/SideCard";
import { GetMangasInfo } from "./../../../HOC/manga/Mangainfo";
import MangaIcon from "./../components/MangaCards/LastReadIcon";
import PlaceholderCard from "./../components/Placeholders/PlaceholderCard";
import PlaceholderItem from "./../components/Placeholders/PlaceholderItem";

function Sidebar(props) {
  console.log(props);
  return (
    <Card>
      <Card.Header>
        <Divider horizontal>
          <Header className="need-theme" as="h5">
            <Icon name="rss" />
            Most Popular {props.type == 0 ? "Manga" : "Anime"}
          </Header>
        </Divider>
      </Card.Header>
      <Card.Body>
        <Item.Group className="myitem vanish" unstackable divided>
          {!props.loading
            ? props.manga
                .slice(0, 6)
                .map((manga) => (
                  <SideCard
                    title={manga.title}
                    loading={props.loading}
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
          {!props.loading
            ? props.manga
                .slice(0, 6)
                .map((manga) => (
                  <MangaIcon
                    title={manga.title}
                    loading={props.loading}
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

export default GetMangasInfo(Sidebar);
