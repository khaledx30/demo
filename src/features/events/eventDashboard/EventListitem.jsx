import React from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import EventListAtendee from "./EventListAtendee";

export default function EventListItem({ event, selectEvent }) {
  return (
    <>
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={event.hostPhotoURL} />
              <Item.Content>
                <Item.Header content={event.title} />
                <Item.Description>Hosted{event.hostBy}</Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {event.date}
            <Icon name="marker" /> {event.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {event.attendees.map((attendees) => (
              <EventListAtendee key={attendees.id} attendees={attendees} />
            ))}
          </List>
        </Segment>
        <Segment clearing>
          <div>{event.description}</div>
          <Button
            onClick={() => selectEvent(event)}
            color="teal"
            floated="right"
            content="view"
          />
        </Segment>
      </Segment.Group>
    </>
  );
}
