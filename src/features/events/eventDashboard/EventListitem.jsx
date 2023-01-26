import React from "react";
import { Link } from "react-router-dom";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import EventListAtendee from "./EventListAtendee";
import { deleteEvent } from "../eventReducer";
import { useDispatch } from "react-redux";
export default function EventListItem({ event }) {
  const dispatch = useDispatch();
  return (
    <>
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={event.hostPhotoURL} />
              <Item.Content>
                <Item.Header>{event.title}</Item.Header>
                <Item.Description>Hosted {event.hostedBy}</Item.Description>
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
            as={Link}
            to={`/events/${event.id}`}
            // onClick={() => selectEvent(event)}
            color="teal"
            floated="right"
            content="view"
          />
          <Button
            onClick={() => dispatch(deleteEvent(event.id))}
            color="red"
            floated="right"
            content="delete"
          />
        </Segment>
      </Segment.Group>
    </>
  );
}
