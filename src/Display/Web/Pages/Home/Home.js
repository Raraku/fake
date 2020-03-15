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
          <title>
            EliteManga - Find and read the best Manga and Anime online
          </title>
          <meta
            name="description"
            content="Find the best manga and anime. Comprehensively reviewed, selected and ranked by a team of experts from
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
