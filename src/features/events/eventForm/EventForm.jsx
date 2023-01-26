import cuid from "cuid";
import React, { useState } from "react";
import { Header, Segment, Button, FormField } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { creatEvent } from "../eventReducer";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import ErrorBoundary from "./CrashableComponent ";
//heloo
export default function EventForm({
  setFormOpen,
  setEvnets,
  // creatEvent,
  selectedEvent,
  updatedEvent,
}) {
  const events = useSelector((state) => state.eventCrud.value);
  const dispatch = useDispatch();
  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    city: "",
    description: "",
    venue: "",
    date: "",
  };
  const [values, setValues] = useState(initialValues);
  const valdationSchema = Yup.object({ title: Yup.string().required() });
  //heloo
  // const mo = {
  //   ...events,
  //   id: cuid(),
  //   hostedBy: "khaled",
  //   attendees: [],
  //   hostPhotoURL: "/assets/user.png",
  // // };
  // function handelFormSubmit() {
  //   selectedEvent
  //     ? updatedEvent({ ...selectedEvent, ...values })
  //     : dispatch(
  //         creatEvent({
  //           ...values,
  //           id: cuid(),
  //           hostedBy: "khaled",
  //           attendees: [],
  //           hostPhotoURL: "/assets/user.png",
  //         })
  //       );
  //   // setFormOpen(false);
  // }

  // function handelInputChange(e) {
  //   const { name, value } = e.target;
  //   setValues({ ...values, [name]: value });
  // }

  return (
    <>
      <Segment clearing>
        {""}
        <Header
          content={selectedEvent ? "Edit the event" : "Creat New Event"}
        />
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => console.log(values)}
          valdationSchema={valdationSchema}
        >
          <Form className="ui form">
            <FormField>
              <Field name="title" placeholder="Evnet Title"></Field>
              <ErrorMessage name="title" />
            </FormField>
            <FormField>
              <Field name="category" placeholder="category"></Field>
            </FormField>
            <FormField>
              <Field name="description" placeholder="Evnet description"></Field>
            </FormField>
            <FormField>
              <Field name="city" placeholder="city"></Field>
            </FormField>
            <FormField>
              <Field name="venue" placeholder="Evnet venue"></Field>
            </FormField>
            <FormField>
              <Field name="date" placeholder="Evnet Title" type="date"></Field>
            </FormField>

            <Button type="submit" floated="right" positive content="Submit" />
            <Button
              as={Link}
              to={"/events"}
              type="submit"
              floated="right"
              content="Cancel"
            />
          </Form>
        </Formik>
      </Segment>
    </>
  );
}
