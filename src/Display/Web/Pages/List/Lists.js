import React from "react";
import {
  Item,
  Divider,
  Header,
  Segment,
  Loader,
  Icon,
  Pagination,
} from "semantic-ui-react";
import { Card } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import PlaceholderItem from "./../components/Placeholders/PlaceholderItem";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      loading: true,
      count: null,
      page: 1,
    };
  }
  getData = (page) => {
    axios
      .get("/lists/", {
        params: { page: page },
      })
      .then((res) => {
        this.setState({
          lists: res.data.results,
          count: res.data.count,
          loading: false,
          page: page,
        });
      });
  };

  setPage = (page) => {
    this.getData(page);
  };
  handlePaginationChange = (e, { activePage }) => this.setPage(activePage);
  componentDidMount() {
    this.getData(this.state.page);
  }
  render() {
    return (
      <div>
        <Card>
          <Card.Header>
            <Divider horizontal>
              <Header className="need-theme" as="h5">
                <Icon name="rss" />
                Trending Lists
              </Header>
            </Divider>
          </Card.Header>
          <Card.Body>
            <div>
              <Item.Group>
                {!this.state.loading
                  ? this.state.lists.map((list) => (
                      <Item as={Link} to={`/lists/${list.slug}`}>
                        <Item.Image size="tiny" src={list.image} />
                        <Item.Content>
                          <Item.Header className="list-header" as="a">
                            {list.title}
                          </Item.Header>
                        </Item.Content>
                      </Item>
                    ))
                  : [...Array(6)].map((e, i) => <PlaceholderItem />)}
              </Item.Group>
            </div>
          </Card.Body>
        </Card>
        <div className="ml-auto mr-auto d-flex justify-content-center">
          <Pagination
            onPageChange={this.handlePaginationChange}
            activePage={this.state.page}
            totalPages={this.state.count / 10}
          />
        </div>
      </div>
    );
  }
}
export default List;
