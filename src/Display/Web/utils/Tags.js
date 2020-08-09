import React, { useState, useEffect } from "react";
import axios from "axios";

const Tags = () => {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    axios.get("/tags/").then((res) => {
      setTags(res.data);
    });
  }, []);
};
export default Tags;
