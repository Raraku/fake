import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

function SearchBar(props) {
  const [params, setParams] = useState("");
  useEffect(() => {
    if (params != "") {
      props.history.push(`/test/${params}`);
    }
    if (params == "") {
      props.history.push("/");
    }
  }, [params]);

  const handleChange = (event) => {
    setParams(event.target.value);
    console.log(props);
    props.history.push(`/test/${params}`);
  };
  return (
    <React.Fragment>
      <Form.Control
        style={{ marginRight: "0.5em" }}
        type="text"
        value={params}
        onChange={handleChange}
      ></Form.Control>
      <Button variant="outline-primary" type="Submit">
        Search
      </Button>
    </React.Fragment>
  );
}
export default SearchBar;
