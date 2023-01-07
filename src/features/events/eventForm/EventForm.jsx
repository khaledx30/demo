import React, { useState } from "react";
import { Header, Segment, Form, Button } from "semantic-ui-react";
//heloo
export default function EventForm({ setFormOpen, setEvnets }) {
  const intialValues = {
    titel: "",
    category: "",
    city: "",
    description: "",
    venue: "",
    date: "",
  };
  const [values, setValues] = useState(intialValues);

  function handelFormSubmit(e) {
    console.log(values);
  }

  function handelInputChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  return (
    <>
      <Segment clearing>
        {" "}
        <Header content="Creat New Event" />
        <Form onSubmit={handelFormSubmit}>
          <Form.Field>
            <input
              type="text"
              placeholder="Event Titel"
              name="titel"
              value={values.titel}
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
