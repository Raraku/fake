import React from "react";
import { Grid, Divider, Button } from "semantic-ui-react";

const Readon = (props) => {
  console.log(props);
  const ButtonToDisplay = (source) => {
    var color = "";
    switch (source.name) {
      case "Viz Media":
        color = "#ff0000";
        break;
      case "Mangaread":
        color = "pink";
        break;
      case "Webtoons":
        color = "green";
        break;
      case "Comixology":
        color = "aqua";
        break;
      default:
        color = "blue";
    }
    return (
      <Button
        href={source.link}
        style={{ backgroundColor: color, color: "white" }}
        fluid
      >
        {source.image && <img className="source-image" src={source.image} />}{" "}
        {source.name}
      </Button>
    );
  };
  return (
    <Grid className="tr" columns={2} relaxed="very" stackable>
      <Grid.Column className="text-center">
        Official Source(s)
        <br />
        {props.sources
          .filter(function (friend) {
            return friend.official == true;
          })
          .map((item) => (
            <div>{ButtonToDisplay(item)}</div>
          ))}
      </Grid.Column>
      <Divider className="dive" vertical>
        Or
      </Divider>
      <Grid.Column className="text-center">
        Unofficial Source(s)
        <br />
        {props.sources
          .filter(function (friend) {
            return friend.official == false;
          })
          .map((item) => (
            <div>{ButtonToDisplay(item)}</div>
          ))}
      </Grid.Column>
    </Grid>
  );
};
export default Readon;
