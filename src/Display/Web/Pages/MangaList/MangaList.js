//MangaInfo
import React from "react";
import { Paper } from "@material-ui/core";
import MangaIcon from "./../components/MangaCards/LastReadIcon";
import { GetMangasInfo } from "./../../../HOC/manga/Mangainfo";
import { Row } from "react-bootstrap";
import { Divider, Pagination } from "semantic-ui-react";
import { Helmet } from "react-helmet";

class MangaList extends React.Component {
  handlePaginationChange = (e, { activePage }) =>
    this.props.setPage(activePage);
  render() {
    console.log(this.props);
    return (
      <Paper>
        <Helmet>
          <title>All Manga - EliteManga</title>
          <meta name="description" content="All Manga" />
        </Helmet>
        <Divider horizontal>
          <h2>All Manga</h2>
        </Divider>
        <Row>
          {this.props.manga.map((manga) => (
            <MangaIcon
              col_size={6}
              loading={this.props.loading}
              title={manga.title}
              alias={manga.alias}
              author={manga.author}
              rank={manga.rank}
              image_url={manga.image_url}
              description={manga.description}
            />
          ))}
        </Row>
        <Pagination
          defaultActivePage={1}
          onPageChange={this.handlePaginationChange}
          activePage={this.props.page}
          totalPages={this.props.count}
        />
      </Paper>
    );
  }
}
export default GetMangasInfo(MangaList);
