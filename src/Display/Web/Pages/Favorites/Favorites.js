//Favorites api endpoints
//Create, delete, updated, Retrieve
import React from "react";
import { Paper } from "@material-ui/core";

import MangaIcon from "./../components/MangaCards/LastReadIcon";
import getFavorites from "./../../../HOC/manga/Favorites";
import { Segment, Loader } from "semantic-ui-react";
import { Helmet } from "react-helmet";

class Favorites extends React.Component {
  render() {
    if (this.props.favorites != []) {
      console.log(this.props.favorites);
      return (
        <div>
          <Helmet>
            <title>Favorites</title>
            <meta
              name="description"
              content="Your favorite Mangas, all in one place. Accessible from any device"
            />
          </Helmet>
          <Paper>
            <h3>Favorite Manga</h3>

            {this.props.loading === false ? (
              this.props.favorites.map((manga) => (
                <MangaIcon
                  loading={this.props.loading}
                  title={manga.manga.title}
                  author={manga.manga.author}
                  last_read={manga.last_read}
                  rank={manga.manga.rank}
                  image_url={manga.manga.image_url}
                  description={manga.manga.description}
                />
              ))
            ) : (
              <Segment>
                <div style={{ height: "200px" }}>
                  <Loader active size="big">
                    Loading...
                  </Loader>
                </div>
              </Segment>
            )}
            {this.props.favorites.length === 1 && (
              <div className="text-center">
                {" "}
                You have only one favorited manga. Check out these other manga:
              </div>
            )}
          </Paper>
        </div>
      );
    } else {
      return <Paper>Oops, you have no favorites...</Paper>;
    }
  }
}

export default getFavorites(Favorites);
