import React from "react";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
const moment = require("moment");

export default function ProfileStory(props) {
  //Assign how long ago story was posted to var
  const time = moment(props.createdAt).fromNow();

  return (
    <div className="profile-story">
      <div>
        <h3>{props.title}</h3> posted: {time}
      </div>
      <div className='profile-buttons'>
        <Nav.Link>
          <Button variant="light" className="button" style={{margin: '0px'}}>
            Wijzig
          </Button>
        </Nav.Link>
        <Nav.Link as={NavLink} to={`story/info/${props.id}`}>
          <Button variant="danger">
            Heatmap
          </Button>
        </Nav.Link>
      </div>
    </div>
  );
}
