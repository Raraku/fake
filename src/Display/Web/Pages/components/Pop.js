import React, { useState, useEffect } from "react";
import { Popover, OverlayTrigger } from "react-bootstrap";

const popover = (
  <Popover placement="right-start" id="popover-basic">
    <Popover.Title as="h3">Popover right</Popover.Title>
    <Popover.Content>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Content>
  </Popover>
);
export const Pop = (WrappedComponent, props) => {
  class Popo extends React.Component {
    render() {
      console.log(this.props);
      return (
        <OverlayTrigger trigger="hover" placement="auto" overlay={popover}>
          <WrappedComponent {...this.props} />
        </OverlayTrigger>
      );
    }
  }
  return Popo;
};
