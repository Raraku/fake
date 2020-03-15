import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import LastReadMangaIcon from "./../components/MangaCards/LastUpdatedManga";
import { Paper } from "@material-ui/core";
import { Helmet } from "react-helmet";

const RandomManga = (props) => {
  const [manga, setManga] = useState([]);
  const [error, setError] = useState(false);
  const [chosenManga, setChosenManga] = useState(null);
  useEffect(() => {
    axios
      .get("/randommangainfo/")
      .then((res) => {
        setManga(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, [error]);
  const chooseManga = () => {
    const qualifiedManga = manga.filter((item) => {
      console.log(item.alias);
      for (let i = 0; i < props.manga.length; i++) {
        if (props.manga[i].alias == item.alias) {
          return true;
        }
      }
    });
    setChosenManga(
      qualifiedManga[Math.floor(Math.random() * qualifiedManga.length)]
    );
    console.log(qualifiedManga);
    console.log(chosenManga);
  };
  return (
    <div>
      <Helmet>
        <title>Random Manga - EliteManga</title>
        <meta
          name="description"
          content="Don't know what to read next? Click the button and our systems will
          generate a random Manga for you. Don't like it? Click the button
          again!"
        />
      </Helmet>
      {chosenManga != null && (
        <Paper>
          <h2 className="m-3">Your random Manga is:</h2>
          <LastReadMangaIcon
            title={chosenManga.title}
            loading={manga == []}
            author={chosenManga.author}
            alias={chosenManga.alias}
            rank={chosenManga.rank}
            last_updated={chosenManga.last_chapter_date}
            image_url={chosenManga.image_url}
          />
        </Paper>
      )}
      <div className="mt-3 text-center">
        <Button
          variant="secondary"
          className="text-center mu-3"
          onClick={chooseManga}
        >
          <h3>Get Random Manga</h3>
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    manga: state.auth.manga
  };
};
export default connect(mapStateToProps)(RandomManga);
