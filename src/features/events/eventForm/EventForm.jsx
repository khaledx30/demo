import React from "react";
import { Header, Segment, Form, Button } from "semantic-ui-react";

export default function EventForm({ setFormOpen }) {
  return (
    <>
      <Segment clearing>
        {" "}
        <Header content="Creat New Event" />
        <Form>
          <Form.Field>
            <input type="text" placeholder="Event Titel" />
          </Form.Field>
          <Form.Field>
            <input type="text" placeholder="Category" />
          </Form.Field>
          <Form.Field>
            <input type="text" placeholder="City" />
          </Form.Field>
          <Form.Field>
            <input type="text" placeholder="Description" />
          </Form.Field>
          <Form.Field>
            <input type="text" placeholder="Venue" />
          </Form.Field>
          <Form.Field>
            <input type="Date" placeholder="Date" />
            <Button type="submit" floated="right" positive content="Submit" />
            <Button
              onClick={() => setFormOpen(false)}
              type="submit"
              floated="right"
              content="Cancel"
            />
          </Form.Field>
        </Form>
      </Segment>
    </>
  );
}
