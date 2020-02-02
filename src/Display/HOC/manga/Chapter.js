import React, { useState, useEffect } from "react";

export function getChapter(WrappedComponent, props) {
  const [Chapter, setChapter] = useState([]);
  useEffect(() => {
    axios
      .get(
        `/manga/${props.match.params.manga}/get_chapter/${props.match.params.chapter}/`
      )
      .then((res) => setChapter(res.data));
  });
  return <WrappedComponent chapter={Chapter} {...props} />;
}
export function getChapters(WrappedComponent, props) {
  const [Chapters, setChapters] = useState([]);
  useEffect(() => {
    axios
      .get(
        `/manga/${props.match.params.manga}/get_chapters/${props.match.params.chapter}/`
      )
      .then((res) => setChapters(res.data));
  });
  return <WrappedComponent chapters={Chapters} {...props} />;
}
