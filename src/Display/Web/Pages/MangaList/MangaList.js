//MangaInfo
import React from "react";
import { Paper, Chip } from "@material-ui/core";
import MangaIcon from "./../components/MangaCards/LastReadIcon";
import { GetMangasInfo } from "./../../../HOC/manga/Mangainfo";
import { Breadcrumb } from "react-bootstrap";
import { Divider, Header, Pagination, CardGroup } from "semantic-ui-react";
import { Helmet } from "react-helmet";
import axios from "axios";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

class MangaList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AllTags: [],
      filterTags: [],
    };
  }
  handlePaginationChange = (e, { activePage }) =>
    this.props.setPage(activePage);
  changeMedia = (type, filterTags = this.state.filterTags) => {
    this.props.changeMedia(1, type, filterTags);
  };
  componentDidMount() {
    axios.get("/mixed/get_all_tags/").then((res) => {
      this.setState({ AllTags: res.data });
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.filterTags !== this.state.filterTags) {
      this.changeMedia(this.props.type, this.state.filterTags);
    }
  }
  handleRevive = (chipToRevive) => () => {
    this.setState(() => {
      var chips = this.state.filterTags.filter(
        (chip) => chip.id === chipToRevive.id
      );
      var filterTags = this.state.filterTags.filter(
        (chip) => chip.id !== chipToRevive.id
      );
      const AllTags = this.state.AllTags.concat(chips).sort((a, b) => {
        return a.id - b.id;
      });
      return {
        filterTags,
        AllTags,
      };
    });
  };
  handleDelete = (chipToDelete) => () => {
    this.setState(() => {
      var chips = this.state.AllTags.filter(
        (chip) => chip.id === chipToDelete.id
      );
      var AllTags = this.state.AllTags.filter(
        (chip) => chip.id !== chipToDelete.id
      );
      const filterTags = this.state.filterTags.concat(chips);
      return {
        filterTags,
        AllTags,
      };
    });
  };
  render() {
    console.log(this.state.filterTags);
    return (
      <Paper>
        <Helmet>
          <title>All Manga - EliteManga</title>
          <meta name="description" content="All Manga" />
        </Helmet>
        <Divider horizontal>
          <Header as="h3">
            <a
              className="bread"
              style={
                this.props.type == 2
                  ? { color: "rgba(5, 36, 121, 0.6)" }
                  : { cursor: "pointer" }
              }
              onClick={() => {
                this.changeMedia(2);
              }}
              active={this.props.type == 2}
            >
              All/
            </a>
            <a
              className="bread"
              style={
                this.props.type == 0
                  ? { color: "rgba(5, 36, 121, 0.6)" }
                  : { cursor: "pointer" }
              }
              onClick={() => {
                this.changeMedia(0);
              }}
              active={this.props.type === 0}
            >
              Manga
            </a>
            <a
              className="bread"
              style={
                this.props.type == 1
                  ? { color: "rgba(5, 36, 121, 0.6)" }
                  : { cursor: "pointer" }
              }
              onClick={() => {
                this.changeMedia(1);
              }}
              active={this.props.type === 1}
            >
              {"/"}
              Anime
            </a>
          </Header>
        </Divider>
        {this.state.AllTags.length > 0 && (
          <div className="chip-container">
            <b className="tag-iden">All Tags:</b>
            <div className="chip-container mb-2 pb-1">
              {this.state.AllTags.map((tag) => (
                <Chip
                  className="tag-chip"
                  clickable
                  onClick={this.handleDelete(tag)}
                  onDelete={this.handleDelete(tag)}
                  label={tag.name}
                  deleteIcon={<ArrowDownwardIcon />}
                ></Chip>
              ))}
            </div>
          </div>
        )}
        <div className="chip-container mb-2">
          <b className="tag-iden">Filter By:</b>
          {this.state.filterTags.length > 0 ? (
            <div className="chip-container pb-1">
              {this.state.filterTags.map((tag) => (
                <Chip
                  className="tag-chip"
                  clickable
                  onClick={this.handleRevive(tag)}
                  onDelete={this.handleRevive(tag)}
                  deleteIcon={<ArrowUpwardIcon />}
                  label={tag.name}
                ></Chip>
              ))}
            </div>
          ) : (
            <span className="tag-iden">You haven't selected any tags</span>
          )}
        </div>
        <CardGroup className="mb-3 excluded" itemsPerRow={2}>
          {this.props.manga.map((manga) => (
            <MangaIcon
              col_size={6}
              loading={this.props.loading}
              title={manga.title}
              alias={manga.alias}
              author={manga.author}
              rank={manga.rank}
              image_url={manga.image_url}
              media_type={manga.media_type}
              description={manga.description}
            />
          ))}
        </CardGroup>
        <div className="ml-auto mr-auto d-flex justify-content-center">
          <Pagination
            onPageChange={this.handlePaginationChange}
            activePage={this.props.page}
            totalPages={this.props.count / 21}
          />
        </div>
      </Paper>
    );
  }
}
export default GetMangasInfo(MangaList);
