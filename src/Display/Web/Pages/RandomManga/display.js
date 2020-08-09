import React, { useState, useEffect } from "react";

import LastReadMangaIcon from "./../components/MangaCards/LastUpdatedManga";
import { Paper, Button } from "@material-ui/core";
import { CardGroup } from "semantic-ui-react";

import MangaDetail from "./../MangaDetail/MangaDetail";

const Display = (props) => {
  const changeManga = () => {
    props.history.push("/random/");
  };
  return (
    <div>
      <div>
        <MangaDetail {...props} />
      </div>
      <div className="button-center mb-3">
        <Button
          className="text-center text-white rand-bt"
          variant="contained"
          color="success"
          onClick={changeManga}
        >
          Get another Recommendation
        </Button>
      </div>
    </div>
  );
};
export default Display;
