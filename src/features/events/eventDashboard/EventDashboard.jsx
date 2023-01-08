import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import EventForm from "../eventForm/EventForm";
import EventList from "./EventList";
import { sampleData } from "../../../app/api/sampleData";
export default function EventDashboard({ formOpen, setFormOpen }) {
  const [events, setEvnets] = useState(sampleData);
  // const [selectEvent, setSelectedEvent] = useState(null);
  function handelCreatEvent(event) {
    setEvnets([...events, event]);
  }
  const [selectEvent, setSelectedEvent] = useState(null);

  function handelSelectEvent(event) {
    setSelectedEvent(event);
    setFormOpen(true);
  }
  return (
    <>
      <Grid>
        <Grid.Column width={10}>
          <EventList events={events} selectEvent={handelSelectEvent} />
        </Grid.Column>
        <Grid.Column width={6}>
          {formOpen && (
            <EventForm
              setFormOpen={setFormOpen}
              setEvents={setEvnets}
              creatEvent={handelCreatEvent}
            />
          )}
        </Grid.Column>
      </Grid>
    </>
  );
}
