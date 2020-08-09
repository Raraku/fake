import React, { useState } from "react";
import { Placeholder, Image, Label, Card, Divider } from "semantic-ui-react";

function PlaceholderCard(props) {
  const [errored, setErrored] = useState(true);
  const [show, setShow] = useState(false);

  return (
    <Card className="mobile-card">
      <Placeholder style={{ width: "100%", height: "190px" }}>
        <Placeholder.Image rectangular />
      </Placeholder>

      <Card.Content className="placeholder-content">
        <Card.Header>
          <Placeholder>
            <Placeholder.Line />
          </Placeholder>
        </Card.Header>
        <Placeholder>
          <Placeholder.Line />
        </Placeholder>
      </Card.Content>
    </Card>
  );
}
export default PlaceholderCard;
