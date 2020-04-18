import React from "react";
import Button from "react-bootstrap/Button";
const moment = require("moment");

export default function ProfileStory(props) {
  const time = moment(props.createdAt).fromNow();

  return (
    <div className="profile-story">
      <div>
        <h3>{props.title}</h3> posted: {time}
      </div>
      <Button variant="secondary">Info</Button>
    </div>
  );
}
