//Manga api
//Recents
import React from "react";
import Latest from "./Latest";
import Recents from "./Recents";
import HotManga from "./HotManga";
import { Helmet } from "react-helmet";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: ""
    };
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>Elitemanga</title>
          <meta
            name="description"
            content="Read the best manga, selected and ranked by a team of experts from
            the comfort of your devices"
          />
        </Helmet>
        <Recents />
        <br />
        <Latest />
        <br />
        <HotManga />
        <br />
      </div>
    );
  }
}
export default Home;
