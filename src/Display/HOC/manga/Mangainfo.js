import React, { useState } from "react";

import { useEffect } from "react";

function getMangaInfo(WrappedComponent) {
  const [Manga, setManga] = useState([]);
  useEffect(() => {
    axios
      .get("/mangainfo/", {
        limit: 15
      })
      .then((res) => {
        setManga(res.data);
      });
  });
}
