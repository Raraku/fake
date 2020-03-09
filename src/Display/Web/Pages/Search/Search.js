//MangaInfo
import React, { useState, useEffect } from "react";
import { Paper } from "@material-ui/core";
import MangaIcon from "./../components/MangaCards/LastReadIcon";
import { Row } from "react-bootstrap";
import { Divider, SearchCategory } from "semantic-ui-react";
import axios from "axios";

const MangaSearch = (props) => {
  const [manga, setManga] = useState(null);
  useEffect(() => {
    axios.get("/mangasearch/").then((res) => {
      setManga(res.data);
    });
  }, []);
  console.log(manga);
  return (
    <Paper>
      <Divider horizontal>
        <h2>All Manga</h2>
      </Divider>
      {manga === null && (
        <h3>
          Sorry, no manga found for your search parameter "{props.params}"
        </h3>
      )}
      <Row>
        {manga != null &&
          manga
            .filter((manga) => {
              console.log(manga.alias.includes(props.params.toLowerCase()));
              return (
                manga.alias.includes(props.params.toLowerCase()) ||
                manga.alias.indexOf(props.params) != -1
              );
            })
            .map((manga) => (
              <MangaIcon
                col_size={6}
                loading={props.loading}
                title={manga.title}
                author={manga.author}
                rank={manga.rank}
                image_url={manga.image_url}
                description={manga.description}
              />
            ))}
      </Row>
    </Paper>
  );
};

export default MangaSearch;
