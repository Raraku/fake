import React, { useState, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import MangaIcon from "../components/MangaCards/LastReadIcon";
import { Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import axiosConfig from "./../../../HOC/axiosConfig";

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
          <Row>
            <Col>
              <h3>Recently Read...</h3>
            </Col>
            <Col>
              <h4 className="text-right">
                <Link to="/recently-read/">See more...</Link>
              </h4>
            </Col>
          </Row>
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
        </Paper>
      )}
    </div>
  );
};

export default Recents;
