import cuid from "cuid";
import React, { useState } from "react";
import { Header, Segment, Button, FormField } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { creatEvent, updatedEvent } from "../eventReducer";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";

import { advShceam } from "./schemas";
import MyInput from "./MyInput";
import MytextArea from "./MytextArea";
import MySelectInput from "./MySelectIput";
import { categoryData } from "../../../app/api/category";

export default function EventForm({
  history,
  match,
  // selectedEvent,
  // updatedEvent,
}) {
  const selectedEvent = useSelector((state) =>
    state.eventCrud.event.find((e) => e.id === match.params.id)
  );

  const dispatch = useDispatch();
  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    city: "",
    description: "",
    venue: "",
    date: "",
  };

  return (
    <>
      <Segment clearing>
        {""}

        <Formik
          initialValues={{ ...initialValues }}
          validationSchema={advShceam}
          onSubmit={(values) => {
            selectedEvent
              ? dispatch(updatedEvent({ ...selectedEvent, ...values }))
              : dispatch(
                  creatEvent({
                    ...values,
                    id: cuid(),
                    hostedBy: "khaled",
                    attendees: [],
                    hostPhotoURL: "/assets/user.png",
                  })
                );
            history.push("/events");
          }}
        >
          {(props) => (
            <Form className="ui form">
              <Header sub color="teal" content={"Event Details"} />
              <MyInput name="title" placeholder="Title" type="text" />
              <MySelectInput
                name="category"
                placeholder="category"
                options={categoryData}
              />
              <MytextArea name="description" placeholder="description" />
              <Header sub color="teal" content={"Event Location Details"} />
              <MyInput name="city" placeholder="city" type="text" />
              <MyInput name="venue" placeholder="venue" type="text" />
              <MyInput name="date" placeholder="date" type="date" />

              <Button
                loading={props.isSubmitting}
                disabled={!props.isValid || !props.dirty || props.isSubmitting}
                type="submit"
                floated="right"
                positive
                content="Submit"
              />
              <Button
                disabled={props.isSubmitting}
                as={Link}
                to={"/events/"}
                type="submit"
                floated="right"
                content="Cancel"
              />
            </Form>
          )}
        </Formik>
      </Segment>
    </>
  );
}
