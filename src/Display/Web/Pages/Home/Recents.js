import React, { useState, useEffect } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import MangaIcon from "../components/MangaCards/LastReadIcon";
import { Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import axiosConfig from "./../../../HOC/axiosConfig";
import { Divider } from "semantic-ui-react";

const Recents = () => {
  const [Manga, setManga] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axiosConfig
      .get("/usermanga/", {
        limit: 4
      })
      .then((res) => {
        setManga(res.data);
        setLoading(false);
      });
  }, []);
  console.log(Manga);
  return (
    <div>
      {!loading && (
        <Paper className="recent-paper">
          <div>
            <Divider horizontal>
              <h3>Latest Updates</h3>
            </Divider>
          </div>
          <Row>
            {Manga != undefined &&
              Manga.map((manga) => (
                <MangaIcon
                  key={manga.alias}
                  loading={loading}
                  alias={manga.alias}
                  title={manga.manga.title}
                  rank={manga.manga.rank}
                  author={manga.manga.author}
                  last_read={manga.last_read}
                  image_url={manga.manga.image_url}
                  description={manga.manga.description}
                />
              ))}
          </Row>
          <div className="text-right">
            <Button variant="outline-success">See more</Button>
          </div>
        </Paper>
      )}
    </div>
  );
};

export default Recents;
