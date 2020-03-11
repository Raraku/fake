import React, { useEffect } from "react";

import ListItemText from "@material-ui/core/ListItemText";
import { Nav } from "react-bootstrap";
import HomeIcon from "@material-ui/icons/Home";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CasinoIcon from "@material-ui/icons/Casino";
import { Link } from "react-router-dom";

function Sidebar() {
  const [show, setShow] = React.useState(0);
  useEffect(() => {
    console.log(show);
  }, [show]);

  const handleOverA = () => {
    setShow(1);
  };
  const handleOverB = () => {
    setShow(2);
  };
  const handleOverC = () => {
    setShow(3);
  };
  const handleOverD = () => {
    setShow(4);
  };

  const handleOut = () => {
    setShow(0);
  };

  return (
    <Nav className="flex-column flex-columna">
      <Nav.Link
        as={Link}
        to="/"
        onMouseOver={handleOverA}
        onMouseOut={handleOut}
      >
        <HomeIcon />
      </Nav.Link>
      {show === 1 && (
        <div className="sidebar-text text-center">
          <ListItemText>Home</ListItemText>
        </div>
      )}
      <Nav.Link
        as={Link}
        to="/favorites/"
        onMouseOver={handleOverB}
        onMouseOut={handleOut}
      >
        <FavoriteIcon />
      </Nav.Link>
      {show === 2 && <div className="sidebar-text text-center">Favorites</div>}
      <Nav.Link
        as={Link}
        to="/random-manga/"
        onMouseOver={handleOverC}
        onMouseOut={handleOut}
      >
        <CasinoIcon />
      </Nav.Link>
      {show === 3 && (
        <div className="sidebar-text text-center">
          Random
          <br /> Manga
        </div>
      )}
      <Nav.Link
        as={Link}
        to="/manga/"
        onMouseOver={handleOverD}
        onMouseOut={handleOut}
      >
        <FormatListBulletedIcon />
      </Nav.Link>
      {show === 4 && <div className="sidebar-text text-center">All Manga</div>}
    </Nav>
  );
}

export default Sidebar;
