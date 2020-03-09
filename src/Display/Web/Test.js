import React from "react";
import MangaList from "./Pages/MangaList/MangaList";
import MangaSearch from "./Pages/Search/Search";

class Test extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return <div>welcome to test</div>;
  }
}
export default Test;
