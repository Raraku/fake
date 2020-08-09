import React from "react";
import { Table } from "semantic-ui-react";

const MangaInfo = (props) => {
  const data = props.data;
  console.log(data);
  return (
    <Table unstackable definition>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Title</Table.Cell>
          <Table.Cell>{data.title}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Author</Table.Cell>
          <Table.Cell>{data.author}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Other Names</Table.Cell>
          <Table.Cell>{data.other_names}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Tags</Table.Cell>
          <Table.Cell>{data.tags && data.tags.join(", ")}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Views</Table.Cell>
          <Table.Cell>{data.hits}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Status</Table.Cell>
          <Table.Cell>{data.status == 1 ? "Ongoing" : "Finished"}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};
export default MangaInfo;
