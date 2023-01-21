import React from "react";
import { Segment, Item } from "semantic-ui-react";
export default function EventDetailedSidebar({ attendees }) {
  return (
    <>
      <Segment
        textAlign="center"
        style={{ border: "none" }}
        attached="top"
        secondary
        inverted
        color="teal"
      >
        {attendees.length} {attendees.length > 1 ? "Pepole" : "Person"} Going
      </Segment>
      <Segment attached>
        <Item.Group relaxed divided>
          {attendees.map((attendee) => (
            <>
              <Item key={attendee.id} style={{ position: "relative" }}>
                <Item.Image size="tiny" src="/assets/user.png" />
                <Item.Content verticalAlign="middle">
                  <Item.Header as="h3">
                    <span>Tom</span>
                  </Item.Header>
                </Item.Content>
              </Item>
              <Item style={{ position: "relative" }}>
                <Item.Image
                  size="tiny"
                  src={attendee.photoURL || "/assets/user.png"}
                />
              </Item>
            </>
          ))}
        </Item.Group>
      </Segment>
    </>
  );
}
