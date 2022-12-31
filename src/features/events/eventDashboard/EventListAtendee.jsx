import React from "react";
import { List, Image } from "semantic-ui-react";

export default function EventListAtendee({ attendees }) {
  return (
    <>
      <List.Item>
        <Image size="mini" circular src={attendees.photoURL} />
      </List.Item>
    </>
  );
}
