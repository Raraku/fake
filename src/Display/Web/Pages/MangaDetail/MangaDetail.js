//UserManga, Manga endpoint
import React from "react";
import MangaIcon from "./../components/MangaCards/SingleManga";
import { Paper } from "@material-ui/core";
import { Divider } from "semantic-ui-react";
import ChapterList from "./../ChapterList/ChapterList";
import { GetManga } from "./../../../HOC/manga/GetManga";
import axiosConfig from "./../../../HOC/axiosConfig";
import { connect } from "react-redux";
import { Alert } from "react-bootstrap";
import { compose } from "redux";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

class MangaDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      manga: []
    };
  }
  componentDidMount() {
    axiosConfig
      .get(`/usermangachapter/${this.props.match.params.manga}/`)
      .then((res) => this.setState({ manga: res.data }))
      .catch((err) => {
        axiosConfig.get(
          `/manga/${this.props.match.params.manga}/add_to_manga/`
        );
      });
  }
  add_to_favorites = () => {
    axiosConfig
      .get(`/usermanga/${this.props.match.params.manga}/add_to_favorites/`, {
        params: {
          choice: !this.state.manga.isfavorite,
          manga: this.props.match.params.manga
        }
      })
      .then((res) => {
        let someProperty = { ...this.state.manga };
        someProperty.isfavorite = !someProperty.isfavorite;
        this.setState({ manga: someProperty });
      });
  };
  render() {
    console.log(this.state);
    return (
      <Paper>
        <Helmet>
          <title>{`Elitemanga - ${this.props.manga.title}`}</title>
          <meta
            name="description"
            content={`${this.props.manga.description}`}
          />
        </Helmet>
        {!this.props.isauthenticated && (
          <Alert className="text-center" variant="danger">
            You are not logged in. <Link to="/login/">Log in</Link> to save your
            manga. When saved, you can access them from any of your devices
          </Alert>
        )}
        {this.props.loading != true && (
          <MangaIcon
            col_size={12}
            detail={window.innerWidth < 768}
            myclass="break-manga"
            loading={this.props.loading}
            title={this.props.manga.title}
            author={this.props.manga.author}
            rank={this.props.manga.rank}
            add_to_favorites={this.add_to_favorites}
            last_read={this.state.manga.last_read}
            is_favorite={this.state.manga.isfavorite}
            image_url={this.props.manga.image_url}
            description={this.props.manga.description}
          />
        )}
        <br />
        <Divider horizontal>
          <h3>Chapters</h3>
        </Divider>
        <ChapterList readChapters={this.state.manga.chapters} {...this.props} />
      </Paper>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isauthenticated: state.auth.token != null
  };
};
export default compose(connect(mapStateToProps), GetManga)(MangaDetail);
