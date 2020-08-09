import React, { useState } from "react";
import { Placeholder } from "semantic-ui-react";

function PlaceholderItem(props) {
  const [errored, setErrored] = useState(true);
  const [show, setShow] = useState(false);

  return (
    <Placeholder>
      <Placeholder.Header image>
        <Placeholder.Line />
        <Placeholder.Line />
      </Placeholder.Header>
    </Placeholder>
  );
}
export default PlaceholderItem;
