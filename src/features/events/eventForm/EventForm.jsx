import cuid from "cuid";
import React, { useState } from "react";
import { Header, Segment, Form, Button } from "semantic-ui-react";
// import ErrorBoundary from "./CrashableComponent ";
//heloo
export default function EventForm({
  setFormOpen,
  setEvnets,
  creatEvent,
  selectedEvent,
  updatedEvent,
}) {
  const intialValues = selectedEvent ?? {
    // title: "",
    category: "",
    city: "",
    description: "",
    venue: "",
    date: "",
  };
  const [values, setValues] = useState(intialValues);
  //heloo

  function handelFormSubmit() {
    selectedEvent
      ? updatedEvent({ ...selectedEvent, ...values })
      : creatEvent({
          ...values,
          id: cuid(),
          hostedBy: "khaled",
          attendees: [],
          hostPhotoURL: "/assets/user.png",
        });
    setFormOpen(false);
  }

  function handelInputChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  return (
    <>
      <Segment clearing>
        {""}
        <Header
          content={selectedEvent ? "Edit the event" : "Creat New Event"}
        />
        <Form onSubmit={handelFormSubmit}>
          <Form.Field>
            <input
              type="text"
              placeholder="Event Titel"
              name="title "
              value={values.title}
              onChange={(e) => handelInputChange(e)}
            />
          </Form.Field>
          <Form.Field>
            <input
              type="text"
              placeholder="Category"
              name="category"
              value={values.category}
              onChange={(e) => handelInputChange(e)}
            />
          </Form.Field>
          <Form.Field>
            <input
              type="text"
              placeholder="City"
              name="city"
              value={values.city}
              onChange={(e) => handelInputChange(e)}
            />
          </Form.Field>
          <Form.Field>
            <input
              type="text"
              placeholder="Description"
              name="description"
              value={values.description}
              onChange={(e) => handelInputChange(e)}
            />
          </Form.Field>
          <Form.Field>
            <input
              type="text"
              placeholder="Venue"
              name="venue"
              value={values.venue}
              onChange={(e) => handelInputChange(e)}
            />
          </Form.Field>
          <Form.Field>
            <input
              type="Date"
              placeholder="Date"
              name="date"
              value={values.date}
              onChange={(e) => handelInputChange(e)}
            />
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
