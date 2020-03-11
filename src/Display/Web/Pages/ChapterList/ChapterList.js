//Manga Chapters
//UserMangaChapters
import React from "react";
import { Table } from "react-bootstrap";
import getChapters from "./../../../HOC/manga/ChapterList";
import axiosConfig from "./../../../HOC/axiosConfig";

class ChapterList extends React.Component {
  reverseList = () => {
    this.props.chapters.reverse();
  };
  routeToReadChapter = (event) => {
    console.log(event.currentTarget.dataset.id);
    this.props.history.push(
      `/manga/${this.props.match.params.manga}/${event.currentTarget.dataset.id}/`
    );
  };
  routeToChapter = (event) => {
    axiosConfig.get(
      `/usermanga/${this.props.match.params.manga}/add_manganelo_chapter/`,
      {
        params: {
          chapter_id: event.currentTarget.dataset.id
        }
      }
    );
    console.log(event.currentTarget.dataset.id);
    this.props.history.push(
      `/manga/${this.props.match.params.manga}/${event.currentTarget.dataset.id}/`
    );
  };
  render() {
    console.log(this.props.readChapters);
    if (this.props.readChapters != undefined) {
      return (
        <Table hover>
          <thead>
            <tr>
              <th>Chapter Title</th>
              <th>Chapter no</th>
            </tr>
          </thead>
          <tbody>
            {!this.props.loading &&
              this.props.chapters.map((chapter) => (
                <>
                  {this.props.readChapters.indexOf(chapter.id) !== -1 ? (
                    <tr
                      onClick={this.routeToReadChapter}
                      key={chapter.number}
                      data-id={chapter.number}
                    >
                      <td className="text-muted">
                        {chapter.title ? chapter.title : chapter.number}
                      </td>
                      <td className="text-muted">{chapter.number}</td>
                    </tr>
                  ) : (
                    <tr
                      onClick={this.routeToChapter}
                      key={chapter.number}
                      data-id={chapter.number}
                    >
                      <td>
                        <b>{chapter.title ? chapter.title : chapter.number}</b>
                      </td>
                      <td>
                        <b>{chapter.id}</b>
                      </td>
                    </tr>
                  )}
                </>
              ))}
          </tbody>
        </Table>
      );
    } else {
      return (
        <Table hover>
          <thead>
            <tr>
              <th>Chapter Title</th>
              <th>Chapter no</th>
            </tr>
          </thead>
          <tbody>
            {!this.props.loading &&
              this.props.chapters.map((chapter) => (
                <tr
                  onClick={this.routeToChapter}
                  key={chapter.number}
                  data-id={chapter.number}
                >
                  <td>
                    <b>{chapter.title ? chapter.title : chapter.number}</b>
                  </td>
                  <td>
                    <b>{chapter.number}</b>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      );
    }
  }
}
export default getChapters(ChapterList);
