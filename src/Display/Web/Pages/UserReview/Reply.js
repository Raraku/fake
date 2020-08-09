import React, { useState } from "react";
import { Comment } from "semantic-ui-react";

const Reply = (props) => {
  return (
    <Comment>
      <Comment.Avatar as="a" src={props.author.avatar} />
      <Comment.Content>
        <Comment.Author as="a">{props.author.username}</Comment.Author>

        <Comment.Text>{props.content}</Comment.Text>
      </Comment.Content>
    </Comment>
  );
};
export default Reply;
