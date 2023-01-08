import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import EventForm from "../eventForm/EventForm";
import EventList from "./EventList";
import { sampleData } from "../../../app/api/sampleData";
export default function EventDashboard({
  formOpen,
  setFormOpen,
  selectEvent,
  selectedEvent,
}) {
  const [events, setEvnets] = useState(sampleData);

  function handelCreatEvent(event) {
    setEvnets([...events, event]);
  }

  return (
    <>
      <Grid>
        <Grid.Column width={10}>
          <EventList events={events} selectEvent={selectEvent} />
        </Grid.Column>
        <Grid.Column width={6}>
          {formOpen && (
            <EventForm
              setFormOpen={setFormOpen}
              setEvents={setEvnets}
              creatEvent={handelCreatEvent}
              selectedEvent={selectedEvent}
              // key={selectedEvent ? selectedEvent.id : null}
            />
          )}
        </Grid.Column>
      </Grid>
    </>
  );
}
