import React, { useState, useEffect } from "react";
import axios from "axios";

export function getUserMangas(WrappedComponent) {
  const [Mangas, setManga] = useState([]);
  useEffect(() => {
    axios
      .get("/usermanga/", {
        limit: 15
      })
      .then((res) => {
        setManga(res.data);
      });
  });
  return <WrappedComponent mangas={Mangas} {...props} />;
}

export function getUserManga(WrappedComponent, props) {
  const [Manga, setManga] = useState([]);
  useEffect(() => {
    axios
      .get(`/usermanga/${props.match.params.manga}`)
      .then((res) => setManga(res.data));
  });
  return <WrappedComponent manga={Manga} {...props} />;
}
